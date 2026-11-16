import usePageEffects from "../hooks/usePageEffects.js";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function Terms() {
  usePageEffects();
  return (
    <>
      <Header />
      <main className="container info-page">
        {"\n"}
        <header className="info-intro">
          <div className="info-eyebrow">{"PARIMATCH"}</div>
          <h1>{"Terms & Conditions"}</h1>
          <p>
            {
              "Please read these guidelines before using this website or following links to an external support service."
            }
          </p>
        </header>
        {"\n"}
        <article
          className="panel info-sections"
          aria-label="Terms & Conditions details"
        >
          <section className="info-section">
            <h2>
              <span className="info-number">{"01"}</span>
              {"Scope of these terms"}
            </h2>
            <p>
              {
                "These terms describe the use of this informational website and its navigation links. By using the site, you agree to use it lawfully and responsibly. If you do not agree, please stop using the website."
              }
            </p>
            <p>
              {
                "These terms do not replace any separate agreement you may have with an external service."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"02"}</span>
              {"Information and support limits"}
            </h2>
            <p>
              {
                "The site presents support topics and links to an external Support Center. It does not itself process payments, manage user accounts or guarantee that a request will be resolved."
              }
            </p>
            <ul>
              <li>
                {
                  "Information may be updated, incomplete or temporarily unavailable."
                }
              </li>
              <li>
                {
                  "No specific response time, refund, account recovery or other outcome is promised by this website."
                }
              </li>
              <li>
                {
                  "Confirm account-specific instructions directly with the relevant service."
                }
              </li>
            </ul>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"03"}</span>
              {"Your responsibilities"}
            </h2>
            <ul>
              <li>
                <strong>{"Use the site lawfully."}</strong>
                {
                  " Follow applicable laws and any eligibility or location restrictions of the service you visit."
                }
              </li>
              <li>
                <strong>{"Provide accurate details."}</strong>
                {
                  " Do not impersonate another person or submit misleading information."
                }
              </li>
              <li>
                <strong>{"Respect site security."}</strong>
                {
                  " Do not attempt unauthorised access, introduce harmful code or disrupt the website."
                }
              </li>
              <li>
                <strong>{"Protect private information."}</strong>
                {
                  " Do not disclose passwords, OTPs, PINs or other secret credentials."
                }
              </li>
            </ul>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"04"}</span>
              {"External websites"}
            </h2>
            <p>
              {
                "The Support Center button opens a separate website. Its availability, content, security practices and handling of support enquiries are managed outside this page. Review the destination website’s own terms and privacy information before using it."
              }
            </p>
            <p>
              {
                "A link or the display of a brand logo does not, by itself, establish an official partnership, approval or endorsement."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"05"}</span>
              {"Privacy and safe communication"}
            </h2>
            <p>
              {
                "The current pages do not include a registration, payment or enquiry submission form. Information you choose to submit on a linked website is subject to that website’s practices, not the content of this page."
              }
            </p>
            <p>
              {
                "Hide unnecessary personal and financial details in screenshots. If someone asks for a secret code or payment to release support, verify the request independently before taking action."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"06"}</span>
              {"Content and availability"}
            </h2>
            <p>
              {
                "Website text, design and brand assets may be subject to intellectual property rights. Do not use them to misrepresent an affiliation or create misleading copies of the service."
              }
            </p>
            <p>
              {
                "The website is provided on an “as available” basis. Access may be interrupted for updates or technical reasons. To the extent permitted by applicable law, the site does not guarantee uninterrupted access or the accuracy of third-party content. Nothing here excludes rights or liabilities that cannot legally be excluded."
              }
            </p>
          </section>
          {"\n"}
          <section className="info-section">
            <h2>
              <span className="info-number">{"07"}</span>
              {"Updates and questions"}
            </h2>
            <p>
              {
                "These terms may be revised as the website’s features change. Review this page periodically; any revision will apply from the date it is published. For account or payment questions, use the Support Center linked from Home and check its own support procedures."
              }
            </p>
          </section>
          {"\n"}
        </article>
        <aside className="info-note">
          {
            "Important: this page covers this website only. External services have their own terms, eligibility requirements and privacy practices."
          }
        </aside>
        <div className="info-bottom">
          <a href="/">{"Back to Home"}</a>
          <a href="/about">{"About this website"}</a>
        </div>
      </main>
      <Sidebar />
    </>
  );
}
