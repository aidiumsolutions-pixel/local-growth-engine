import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { FormProvider } from "@/components/site/FormContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aidium Solutions — AI Automation & Lead Generation Agency" },
      { name: "description", content: "Done-for-you AI automation, CRM, lead generation, and appointment booking systems for service businesses across the United States." },
      { name: "author", content: "Aidium Solutions" },
      { property: "og:title", content: "Aidium Solutions — AI Automation & Lead Generation Agency" },
      { property: "og:description", content: "Done-for-you AI automation, CRM, lead generation, and appointment booking systems for service businesses across the United States." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Aidium Solutions" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Aidium Solutions — AI Automation & Lead Generation Agency" },
      { name: "twitter:description", content: "Done-for-you AI automation, CRM, lead generation, and appointment booking systems for service businesses across the United States." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/092efdcb-0741-4053-8c78-64d991d5c73c/id-preview-7e8ae989--6e7277f7-9725-4154-8495-92e4f9345141.lovable.app-1781531831280.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/092efdcb-0741-4053-8c78-64d991d5c73c/id-preview-7e8ae989--6e7277f7-9725-4154-8495-92e4f9345141.lovable.app-1781531831280.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aidium Solutions",
          url: "https://aidiumsolutions.com",
          email: "aidiumsolutions@gmail.com",
          description:
            "AI automation, CRM, lead generation, and appointment booking systems for service businesses.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="site">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider>
        <Nav />
        <Outlet />
        <Footer />
        <ContactForm />
      </FormProvider>
    </QueryClientProvider>
  );
}
