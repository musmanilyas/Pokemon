/// <reference types ="vitest" />
/// <reference types ="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
export default defineConfig(() => {
  const env = dotenv.config();
  const API_URL = `${env.parsed?.VITE_API_URL ?? "http://localhost:5137"}`;
  const PORT = `${env.parsed?.VITE_PORT ?? "3000"}`;
  return {
    server: {
      proxy: {
        "/api": API_URL,
      },
      port: Number(PORT),
    },
    build: {
      outDir: "public",
    },
    plugins: [react()],
    test: {
      globals: true,
      enviroment: "jsdom",
      setupFiles: "./src/test/setup.ts",
    },
  };
});
