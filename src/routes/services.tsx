import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/services";
import { BookCallButton, WhatsAppButton } from "@/components/site/CtaButton";

const TITLE = "Our Services | Websites, Automation & Booking Systems — Aidium Solutions";
const DESC = "Explore every service Aidium Solutions offers: conversion websites, lead capture, automated follow-ups, appointment booking, CRM dashboards and Google review automation for service businesses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="page-hero-inner">
          <div className="hero-eyebrow">Our Services</div>
          <h1>Everything you need to <em>book more clients</em></h1>
          <p>
            Seven services that work as one system — from the website that captures the lead
            to the reminder that gets them to show up. Pick a piece or run the whole stack.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <BookCallButton />
            <WhatsAppButton />
          </div>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div className="service-detail-list">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <article key={s.slug} className="service-detail-card">
                  <div className="service-detail-head">
                    <div className="service-detail-icon" style={{ background: s.bg, color: s.color }}>
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="service-detail-num">{String(i + 1).padStart(2, "0")}</div>
                      <h2>{s.name}</h2>
                      <p className="service-detail-tag">{s.tagline}</p>
                    </div>
                  </div>
                  <p className="service-detail-body">{s.details}</p>
                  <ul className="service-detail-features">
                    {s.features.map((f) => (
                      <li key={f}>
                        <span className="service-detail-check" style={{ color: s.color }}>
                          <Check size={16} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-detail-outcome">
                    <span>Outcome</span>
                    {s.outcome}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ink-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Next Step</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Not sure which service you need?</h2>
          <p className="section-sub" style={{ margin: "16px auto 32px", textAlign: "center" }}>
            Book a free 20-minute call and we'll map out exactly what would move the needle for your business.
          </p>
          <div className="cta-actions" style={{ justifyContent: "center" }}>
            <BookCallButton label="Book Your Free Call" />
            <Link to="/locations" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              See areas we serve <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}