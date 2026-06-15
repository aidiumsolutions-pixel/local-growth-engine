import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useContactForm } from "./FormContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openForm } = useContactForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="logo-mark" />
            <span className="logo-text">AIDIUM <span>SOLUTIONS</span></span>
          </Link>
          <div className="nav-links">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>Home</Link>
            <Link to="/about" activeProps={{ className: "active" }}>About</Link>
            <Link to="/services" activeProps={{ className: "active" }}>Services</Link>
            <Link to="/locations" activeProps={{ className: "active" }}>Locations</Link>
            <Link to="/industries" activeProps={{ className: "active" }}>Industries</Link>
            <a href="mailto:aidiumsolutions@gmail.com">Contact</a>
          </div>
          <button className="nav-cta desktop" onClick={openForm}>Book a Call</button>
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
        <Link to="/locations" onClick={() => setMobileOpen(false)}>Locations</Link>
        <Link to="/industries" onClick={() => setMobileOpen(false)}>Industries</Link>
        <a href="mailto:aidiumsolutions@gmail.com">aidiumsolutions@gmail.com</a>
        <a href="https://wa.me/923048978432" target="_blank" rel="noreferrer">WhatsApp: +92 304 8978432</a>
        <button className="nav-cta" onClick={() => { openForm(); setMobileOpen(false); }}>Book a Call</button>
      </div>
    </>
  );
}