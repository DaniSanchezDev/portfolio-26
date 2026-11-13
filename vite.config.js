import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// En producción Vercel sirve /api/chat como función serverless. En desarrollo
// este plugin ejecuta el mismo handler para no necesitar `vercel dev`.
const localApiPlugin = () => ({
  name: "local-api",
  configureServer(server) {
    const env = loadEnv(server.config.mode, process.cwd(), "");
    process.env.GROQ_API_KEY ??= env.GROQ_API_KEY;

    server.middlewares.use("/api/chat", async (req, res) => {
      if (req.method !== "POST") {
        res.statusCode = 405;
        res.end();
        return;
      }

      try {
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);

        const forwardedHeaders = ["content-type", "origin", "host"];
        const headers = new Headers();
        for (const name of forwardedHeaders) {
          if (req.headers[name]) headers.set(name, req.headers[name]);
        }
        headers.set("x-forwarded-for", req.socket.remoteAddress ?? "local");

        const request = new Request("http://localhost/api/chat", {
          method: "POST",
          headers,
          body: Buffer.concat(chunks),
        });

        const { POST } = await server.ssrLoadModule("/api/chat.js");
        const response = await POST(request);

        res.statusCode = response.status;
        res.setHeader("Content-Type", "application/json");
        res.end(await response.text());
      } catch (error) {
        server.config.logger.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Error interno del servidor local." }));
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
