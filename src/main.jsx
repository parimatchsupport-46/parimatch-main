import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/navigation.css";
import "./styles/animations.css";
import "./styles/info-pages.css";
import "./styles/layout.css";
import "./styles/root.css";

const path = window.location.pathname.replace(/\/$/, "");
let page;
if (path === "/about" || path === "/about.html") {
  document.title = "About | PARIMATCH";
  page = await import("./pages/About.jsx");
} else if (path === "/terms" || path === "/terms.html") {
  document.title = "Terms & Conditions | PARIMATCH";
  page = await import("./pages/Terms.jsx");
} else {
  document.title = "PARIMATCH";
  page = await import("./pages/Home.jsx");
}
const Page = page.default;
createRoot(document.getElementById("root")).render(<Page />);
