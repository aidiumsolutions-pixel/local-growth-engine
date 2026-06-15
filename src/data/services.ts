import {
  Globe,
  FormInput,
  MessageSquareText,
  CalendarCheck,
  LayoutDashboard,
  Star,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  color: string;
  bg: string;
  icon: LucideIcon;
  features: string[];
  outcome: string;
  details: string;
};

export const SERVICES: Service[] = [
  {
    slug: "website-design",
    name: "Conversion Website",
    tagline: "A site that turns visitors into booked clients.",
    short: "Built to convert visitors, not just look pretty.",
    color: "#5B7FFF",
    bg: "rgba(91,127,255,0.12)",
    icon: Globe,
    features: [
      "Mobile-first, fast-loading pages",
      "Clear CTAs above the fold",
      "Trust signals, reviews & proof",
      "On-page SEO baked in",
    ],
    outcome: "More enquiries from the same traffic.",
    details:
      "We design and build a website focused on one job: turning the visitor into a booked call. Every section is structured around clarity, speed and conversion — not stock animations or noise.",
  },
  {
    slug: "lead-capture-forms",
    name: "Lead Capture Forms",
    tagline: "Capture every enquiry, instantly.",
    short: "Smart forms that route leads where they need to go.",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    icon: FormInput,
    features: [
      "Multi-step qualifying forms",
      "Instant CRM sync",
      "Spam filtering & validation",
      "Real-time notifications",
    ],
    outcome: "Zero leads slip through the cracks.",
    details:
      "We build qualifying forms that pre-screen leads and push them straight into your CRM with an instant notification to you and an instant reply to the lead.",
  },
  {
    slug: "automated-follow-ups",
    name: "Automated Follow-Ups",
    tagline: "SMS & email sequences that work 24/7.",
    short: "Never let a lead go cold again.",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.12)",
    icon: MessageSquareText,
    features: [
      "Instant first reply (under 60s)",
      "Multi-day nurture sequences",
      "SMS, email & WhatsApp",
      "Reminders & no-show recovery",
    ],
    outcome: "More booked calls without lifting a finger.",
    details:
      "Every new lead gets contacted within a minute, then a multi-touch sequence keeps the conversation going across SMS, email and WhatsApp until they book or opt out.",
  },
  {
    slug: "appointment-booking",
    name: "Appointment Booking System",
    tagline: "Clients book themselves. You show up.",
    short: "Let clients self-schedule directly into your calendar.",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.12)",
    icon: CalendarCheck,
    features: [
      "Calendar sync (Google / Outlook)",
      "Round-robin team booking",
      "Automated reminders",
      "Reschedule & cancellation flow",
    ],
    outcome: "A full calendar without the back-and-forth.",
    details:
      "We replace the email tennis with a clean booking page that respects your availability, buffers, and time zones — fully connected to your follow-up system.",
  },
  {
    slug: "crm-dashboard",
    name: "CRM & Dashboard",
    tagline: "See every lead, every booking, in one place.",
    short: "One dashboard for leads, pipeline and revenue.",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.12)",
    icon: LayoutDashboard,
    features: [
      "Unified lead pipeline",
      "Source & ROI tracking",
      "Pipeline stages & notes",
      "Team activity logs",
    ],
    outcome: "Clarity on what's working — and what isn't.",
    details:
      "A single source of truth for every lead and booking, with the metrics that actually matter for a service business: speed-to-lead, show rate, and revenue per source.",
  },
  {
    slug: "google-reviews",
    name: "Google Reviews Automation",
    tagline: "Turn happy clients into 5-star social proof.",
    short: "Automated review requests that build trust.",
    color: "#FBBC05",
    bg: "rgba(251,188,5,0.14)",
    icon: Star,
    features: [
      "Post-appointment review requests",
      "Direct-to-Google review links",
      "Negative feedback intercept",
      "Review monitoring & alerts",
    ],
    outcome: "A steady flow of fresh 5-star reviews.",
    details:
      "After every completed appointment, we automatically ask for a review — happy clients are pushed straight to Google, unhappy ones go to a private feedback form first.",
  },
  {
    slug: "all-connected",
    name: "Fully Connected System",
    tagline: "Every piece talks to every other piece.",
    short: "No duct tape. No 12 different tools to manage.",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.12)",
    icon: Workflow,
    features: [
      "Website → CRM → Calendar",
      "Reviews & follow-ups built-in",
      "One login, one team, one system",
      "We manage and maintain it",
    ],
    outcome: "A growth engine that runs itself.",
    details:
      "Instead of stitching together five SaaS tools, you get one connected system we build, host and maintain — so your team can focus on the work, not the tech.",
  },
];

export const serviceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);