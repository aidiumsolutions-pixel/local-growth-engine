import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <div className="logo-mark" />
          <span className="logo-text">AIDIUM <span>SOLUTIONS</span></span>
        </Link>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/industries">Industries</Link>
          <a href="mailto:aidiumsolutions@gmail.com">aidiumsolutions@gmail.com</a>
          <a href="https://wa.me/923048978432" target="_blank" rel="noreferrer">+92 304 8978432</a>
        </div>
        <div className="footer-copy">© 2026 Aidium Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
}