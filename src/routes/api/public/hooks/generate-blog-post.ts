import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/hooks/generate-blog-post")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apikey = request.headers.get("apikey");
        if (!apikey || apikey !== process.env["SUPABASE_ANON_KEY"]) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }
        try {
          const { generateAndStorePost } = await import("@/lib/blog.server");
          const post = await generateAndStorePost();
          return new Response(JSON.stringify({ success: true, post }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          console.error("[generate-blog-post]", message);
          return new Response(JSON.stringify({ success: false, error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});