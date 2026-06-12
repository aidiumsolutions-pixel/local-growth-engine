import { useContactForm } from "./FormContext";

export function BookCallButton({
  className = "btn-primary",
  label = "Book a Free Strategy Call",
  withIcon = true,
}: {
  className?: string;
  label?: string;
  withIcon?: boolean;
}) {
  const { openForm } = useContactForm();
  return (
    <button className={className} onClick={openForm}>
      {withIcon && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )}
      {label}
    </button>
  );
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/923048978432" target="_blank" rel="noreferrer" className="btn-secondary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      WhatsApp Us
    </a>
  );
}