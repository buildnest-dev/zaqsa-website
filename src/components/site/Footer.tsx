import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "@/components/site/icons";
import { Logo } from "./Nav";
import { NAV } from "@/lib/content";
import { useSite } from "@/components/site/SiteContent";

const EXPERTISE = [
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/business", label: "Business" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
];

const COMPANY_LINKS = NAV.filter(({ to }) => ["/lab", "/about", "/contact"].includes(to));

export function Footer() {
  const { company: COMPANY, team } = useSite();
  const founders = team.filter((person) => person.group === "founder");
  return (
    <footer className="site-footer">
      <div className="container-z relative">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">A useful first conversation</p>
            <h2>Bring us the problem before you know the solution.</h2>
          </div>
          <Link to="/contact" className="footer-cta-link">
            Start a conversation <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand-column">
            <Link to="/" aria-label="ZAQSA home">
              <Logo />
            </Link>
            <p className="footer-brand-copy">
              {COMPANY.tagline} {COMPANY.support}
            </p>
            <p className="mt-5 text-[.67rem] font-semibold tracking-[.14em] text-primary uppercase">
              New Delhi · India
            </p>
          </div>

          <nav aria-label="Footer expertise">
            <h3 className="footer-column-title">What we do</h3>
            <ul className="footer-links">
              {EXPERTISE.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    {item.label}
                    <ArrowUpRight size={12} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company links">
            <h3 className="footer-column-title">Company</h3>
            <ul className="footer-links">
              {COMPANY_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    {item.label}
                    <ArrowUpRight size={12} aria-hidden />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy">
                  Privacy
                  <ArrowUpRight size={12} aria-hidden />
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  Terms
                  <ArrowUpRight size={12} aria-hidden />
                </Link>
              </li>
            </ul>
          </nav>

          <address className="footer-contact not-italic">
            <h3 className="footer-column-title">Talk to us</h3>
            {(founders.length ? founders : [{ id: "c", name: COMPANY.founder, role: COMPANY.role }]).map((person) => (
              <p key={person.id} className="text-foreground">
                {person.name} <span className="text-muted-foreground">· {person.role}</span>
              </p>
            ))}
            <p className="mt-3">{COMPANY.address}</p>
            <p className="mt-3">
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </p>
            <p className="mt-1 break-all">
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer-wordmark-wrap" aria-hidden="true">
        <span className="footer-wordmark">ZAQSA</span>
      </div>

      <div className="container-z footer-bottom">
        <p>
          © {new Date().getFullYear()} ZAQSA. {COMPANY.support}
        </p>
        <div className="footer-bottom-links">
          <a href="https://www.streamlinehq.com" target="_blank" rel="noopener noreferrer">
            Icons: Streamline
          </a>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
