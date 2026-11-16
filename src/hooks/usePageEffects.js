import { useLayoutEffect } from "react";

export default function usePageEffects() {
  useLayoutEffect(() => {
    const controller = new AbortController();
    const listen = (target, type, callback) =>
      target.addEventListener(type, callback, { signal: controller.signal });
    const menuButton = document.getElementById("menuButton");
    const drawer = document.getElementById("navigationDrawer");
    listen(menuButton, "click", () => {
      drawer.showModal();
      document.body.classList.add("drawer-open");
      menuButton.setAttribute("aria-expanded", "true");
    });
    listen(drawer.querySelector(".drawer-close"), "click", () =>
      drawer.close(),
    );
    listen(drawer, "click", (event) => {
      if (event.target !== drawer) return;
      const rect = drawer.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        drawer.close();
    });
    listen(drawer, "close", () => {
      document.body.classList.remove("drawer-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    });
    for (const link of drawer.querySelectorAll("nav a")) {
      if (new URL(link.href).pathname === location.pathname)
        link.setAttribute("aria-current", "page");
    }
    let observer;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = document.querySelectorAll(
      ".page-header, .banner-wrapper, .panel.content, .info-intro, .info-section, .info-note, .info-bottom, .important-features > h2, .important-feature, footer",
    );
    if ("IntersectionObserver" in window && !preference.matches) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return;
            target.classList.add("is-visible");
            observer.unobserve(target);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -32px 0px" },
      );
      targets.forEach((target) => {
        target.classList.add("scroll-reveal");
        observer.observe(target);
      });
      listen(preference, "change", () => {
        if (preference.matches) {
          observer.disconnect();
          targets.forEach((target) => target.classList.add("is-visible"));
        }
      });
    }
    const banner = document.getElementById("bannerImg");
    if (banner) {
      function fallback() {
        banner.hidden = true;
        document.getElementById("bannerFallback").hidden = false;
      }
      listen(banner, "error", fallback);
      if (banner.complete && banner.naturalWidth === 0) fallback();
    }
    return () => {
      controller.abort();
      observer?.disconnect();
      document.body.classList.remove("drawer-open");
      targets.forEach((target) =>
        target.classList.remove("scroll-reveal", "is-visible"),
      );
    };
  }, []);
}
