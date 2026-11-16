import usePageEffects from "../hooks/usePageEffects.js";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  usePageEffects();
  return (
    <>
      <Header />
      <main className="container">
        {"\n"}
        <div className="card banner-wrapper">
          {"\n"}
          <img id="bannerImg" src="/banner/banner.png" alt="PARIMATCH banner" />
          {"\n"}
          <div className="banner-fallback" id="bannerFallback" hidden>
            {
              "\n        Banner image yahan add karein (banner/banner.jpg)\n      "
            }
          </div>
          {"\n"}
        </div>
        {"\n"}
        <section className="panel content">
          {"\n"}
          <h1>{"Were Here to Help You"}</h1>
          {"\n"}
          <ul className="feature-list">
            {"\n"}
            <li>
              {"\n"}
              <span className="feature-icon">
                {"\n"}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {"\n"}
                  <circle cx="12" cy="12" r="10"></circle>
                  {"\n"}
                  <polyline points="12 6 12 12 16 14"></polyline>
                  {"\n"}
                </svg>
                {"\n"}
              </span>
              {"\n"}
              <span>{"24/7 dedicated support team always available"}</span>
              {"\n"}
            </li>
            {"\n"}
            <li>
              {"\n"}
              <span className="feature-icon">
                {"\n"}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {"\n"}
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  {"\n"}
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                  {"\n"}
                </svg>
                {"\n"}
              </span>
              {"\n"}
              <span>{"Quick help with account & payment issues"}</span>
              {"\n"}
            </li>
            {"\n"}
            <li>
              {"\n"}
              <span className="feature-icon">
                {"\n"}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {"\n"}
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  {"\n"}
                </svg>
                {"\n"}
              </span>
              {"\n"}
              <span>{"Answers to any question anytime anywhere"}</span>
              {"\n"}
            </li>
            {"\n"}
            <li>
              {"\n"}
              <span className="feature-icon">
                {"\n"}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {"\n"}
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  {"\n"}
                </svg>
                {"\n"}
              </span>
              {"\n"}
              <span>{"Fast response were just a click away"}</span>
              {"\n"}
            </li>
            {"\n"}
          </ul>
          {"\n"}
          <div className="actions">
            {"\n"}
            <a
              className="btn primary"
              href="https://crorebetsupport.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              {"\n          Support Center\n          "}
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                {"\n"}
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                {"\n"}
              </svg>
              {"\n"}
            </a>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section
          className="important-features"
          aria-labelledby="importantFeaturesTitle"
        >
          {"\n"}
          <h2 id="importantFeaturesTitle">{"Essential Support Features"}</h2>
          {"\n"}
          <div className="important-feature-grid">
            {"\n"}
            <article className="card important-feature">
              {"\n"}
              <span className="essential-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="4"></circle>
                  <path d="M2 21v-2a6 6 0 0 1 10-4M16 17l2 2 4-4"></path>
                </svg>
              </span>
              {"\n"}
              <h3>{"Account Assistance"}</h3>
              {"\n"}
              <p>
                {
                  "Find the right support for login difficulties and account access questions."
                }
              </p>
              {"\n"}
            </article>
            {"\n"}
            <article className="card important-feature">
              {"\n"}
              <span className="essential-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="3"></rect>
                  <path d="M2 9h20M6 15h4"></path>
                </svg>
              </span>
              {"\n"}
              <h3>{"Payment Enquiries"}</h3>
              {"\n"}
              <p>
                {
                  "Raise payment-related questions with the support service using your transaction reference."
                }
              </p>
              {"\n"}
            </article>
            {"\n"}
            <article className="card important-feature">
              {"\n"}
              <span className="essential-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Z"></path>
                  <path d="m8 12 3 3 5-6"></path>
                </svg>
              </span>
              {"\n"}
              <h3>{"Safety Guidance"}</h3>
              {"\n"}
              <p>
                {
                  "Protect your details: never share passwords, OTPs or PINs when asking for help."
                }
              </p>
              {"\n"}
            </article>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
      </main>
      <Footer />
      <Sidebar />
    </>
  );
}
