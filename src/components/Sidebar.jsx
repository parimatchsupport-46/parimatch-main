export default function Sidebar() {
  return (
    <>
      <dialog
        className="navigation-drawer"
        id="navigationDrawer"
        aria-label="Main navigation"
      >
        {"\n"}
        <div className="drawer-heading">
          {"\n"}
          <img src="/logo/logo.png" alt="PARIMATCH" width="42" height="42" />
          {"\n"}
          <button
            className="drawer-close"
            type="button"
            aria-label="Close navigation menu"
          >
            {"×"}
          </button>
          {"\n"}
        </div>
        {"\n"}
        <nav aria-label="Main navigation">
          {"\n"}
          <a href="/">{"Home"}</a>
          {"\n"}
          <a href="/about">{"About"}</a>
          {"\n"}
          <a href="/terms">{"Terms & Conditions"}</a>
          {"\n"}
        </nav>
        {"\n"}
      </dialog>
    </>
  );
}
