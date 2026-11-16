export default function Header() {
  return (
    <>
      <header className="page-header">
        {"\n"}
        <div className="header-inner">
          {"\n"}
          <img className="logo-icon" src="/logo/main.png" alt="PARIMATCH logo" />
          {"\n"}
          <div className="header-menu">
            {"\n"}
            <button
              className="menu-button"
              id="menuButton"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded="false"
              aria-controls="navigationDrawer"
            >
              {"\n"}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {"\n"}
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                {"\n"}
              </svg>
              {"\n"}
            </button>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
      </header>
    </>
  );
}
