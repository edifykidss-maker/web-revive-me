import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-serif text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2 text-sm font-medium text-ink transition hover:opacity-90"
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
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-gold px-6 py-2 text-sm font-medium text-ink"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-6 py-2 text-sm">Home</a>
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
      { title: "Haritha Makeovers — Bridal & Party Makeup Artist" },
      { name: "description", content: "Premium bridal & party makeup artist. Transforming beauty into elegance with HD finish, long-lasting looks, and a hygienic, on-time experience." },
      { name: "author", content: "Haritha Makeovers" },
      { property: "og:title", content: "Haritha Makeovers — Bridal & Party Makeup Artist" },
      { property: "og:description", content: "Premium bridal & party makeup artist. Transforming beauty into elegance with HD finish, long-lasting looks, and a hygienic, on-time experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Haritha Makeovers — Bridal & Party Makeup Artist" },
      { name: "twitter:description", content: "Premium bridal & party makeup artist. Transforming beauty into elegance with HD finish, long-lasting looks, and a hygienic, on-time experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78882e60-1cdc-4bf4-aedf-f9ce32bd7d08/id-preview-1cf1bd3e--31b5edc8-37f9-4ac8-9791-888e5d3365c8.lovable.app-1779861392020.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78882e60-1cdc-4bf4-aedf-f9ce32bd7d08/id-preview-1cf1bd3e--31b5edc8-37f9-4ac8-9791-888e5d3365c8.lovable.app-1779861392020.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Great+Vibes&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
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
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
