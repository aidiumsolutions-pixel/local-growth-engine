import { useState } from "react";
import { useContactForm } from "./FormContext";

export function ContactForm() {
  const { open, closeForm } = useContactForm();
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<{ kind: "success" | "error"; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMsg(null);
    const form = e.currentTarget;
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) });
      const data = await res.json();
      if (data.success) {
        setMsg({ kind: "success", text: "Message sent! We'll be in touch within 24 hours." });
        form.reset();
        setTimeout(() => { closeForm(); setMsg(null); }, 3000);
      } else throw new Error();
    } catch {
      setMsg({ kind: "error", text: "Something went wrong. Please try WhatsApp instead." });
    }
    setSubmitting(false);
  }

  return (
    <div
      className={`form-overlay${open ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}
    >
      <div className="form-box">
        <button className="form-close" onClick={closeForm} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h3>Let's Talk</h3>
        <p>Tell us about your business and we'll reach out within 24 hours.</p>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="25a998df-4c55-4971-9bb6-7a0b4e80d95d" />
          <input type="hidden" name="subject" value="New Contact Form Submission - Aidium Solutions" />
          <input type="hidden" name="from_name" value="Aidium Solutions Website" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} readOnly />
          <div className="form-field">
            <label>Your Name</label>
            <input type="text" name="name" required placeholder="e.g. Ahmed Khan" />
          </div>
          <div className="form-field">
            <label>Email Address</label>
            <input type="email" name="email" required placeholder="you@example.com" />
          </div>
          <div className="form-field">
            <label>Phone Number</label>
            <input type="tel" name="phone" required placeholder="+1 555 123 4567" />
          </div>
          <div className="form-field">
            <label>Tell us about your business</label>
            <textarea name="message" placeholder="What do you do, and what's your biggest challenge right now?" />
          </div>
          <button type="submit" className="form-submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </button>
          {msg && <div className={`form-msg ${msg.kind}`}>{msg.text}</div>}
        </form>
      </div>
    </div>
  );
}