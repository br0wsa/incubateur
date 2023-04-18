import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import flow from "vite-plugin-flow";

export default defineConfig({
  plugins: [reactRefresh(), flow()],
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimizeDeps: {
    include: ["@react-spectrum/actiongroup"],
  },
});
