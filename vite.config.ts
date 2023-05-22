import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // get env with PREFIX "VITE_"
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log(env);
  console.log(command);
  if (mode === "production") {
    return {
      base: "/static",
    };
  }
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    clearScreen: false,
    css: {
      devSourcemap: true,
    },
    logLevel: "info",
  };
});
