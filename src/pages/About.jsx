import usePageEffects from "../hooks/usePageEffects.js";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function About() {
  usePageEffects();
  return (
    <>
      <Header />
      <main className="container info-page">
        {"\n"}
        <header className="info-intro">
          <div className="info-eyebrow">{"PARIMATCH"}</div>
          <h1>{"About"}</h1>
          <p>
            {
              "A clear guide to this website, the support topics it highlights and the steps to take when you need help."
            }
          </p>
        </header>
        {"\n"}
        <article className="panel info-sections" aria-label="About details">
          <section className="info-section">
            <h2>
              <span className="info-number">{"01"}</span>
              {"What this page is for"}
            </h2>
            <p>
              {
                "PARIMATCH is a simple starting point for finding help with account access, payment questions and general support enquiries. The home page brings the available support topics together and provides a direct link to the external Support Center."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"02"}</span>
              {"What you can get help with"}
            </h2>
            <ul>
              <li>
                <strong>{"Account access:"}</strong>
                {
                  " Questions about signing in, account details or access problems."
                }
              </li>
              <li>
                <strong>{"Payment enquiries:"}</strong>
                {
                  " Guidance on how to raise a payment-related issue and what reference details to prepare."
                }
              </li>
              <li>
                <strong>{"General questions:"}</strong>
                {
                  " Help finding the right place to ask about a service or an unresolved issue."
                }
              </li>
            </ul>
            <p>
              {
                "Support availability, response times and the action taken on a request depend on the service handling your enquiry."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"03"}</span>
              {"How to request support"}
            </h2>
            <ol>
              <li>
                <strong>{"Open Home."}</strong>
                {
                  " Select the yellow Support Center button to open the linked support website in a new tab."
                }
              </li>
              <li>
                <strong>{"Explain the issue."}</strong>
                {
                  " Describe what happened, when it happened and any error message you received."
                }
              </li>
              <li>
                <strong>{"Include useful references."}</strong>
                {
                  " If relevant, prepare a transaction reference or a screenshot with sensitive information hidden."
                }
              </li>
              <li>
                <strong>{"Follow up carefully."}</strong>
                {
                  " Keep any case reference and use the instructions provided by the support service."
                }
              </li>
            </ol>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"04"}</span>
              {"Keep your information safe"}
            </h2>
            <p>
              {
                "This website does not provide an account sign-in or payment form. Do not share your password, OTP, PIN, full card details or recovery codes when requesting help. Check the destination address before entering personal information on an external website."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"05"}</span>
              {"Using this website"}
            </h2>
            <p>
              {
                "Use the menu button in the header to move between Home, About and Terms & Conditions. This page explains the support entry point; it does not process transactions, verify accounts or decide the outcome of support requests."
              }
            </p>
            <p>
              {
                "Brand names and logos appear on the site, but their display alone should not be treated as proof of ownership, authorisation or endorsement by a brand."
              }
            </p>
          </section>
          {"\n"}
        </article>
        <aside className="info-note">
          {
            "Before you continue: check the linked website’s address and never share secret login or payment credentials."
          }
        </aside>
        <div className="info-bottom">
          <a href="/">{"Back to Home"}</a>
          <a href="/terms">{"Terms & Conditions"}</a>
        </div>
      </main>
      <Sidebar />
    </>
  );
}
