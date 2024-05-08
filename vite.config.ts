import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: { host: true, port: 80,},
  define: { 'process.env.BUNGIE_API_KEY': '"ac1948bd5fc0489fa439f828bbdf96fd"', BUNGIE_APP_INFO: { api_key: "ac1948bd5fc0489fa439f828bbdf96fd", client_id: "45938", client_secret: "9ZCMnmvyEJDHuKVYNHV4rTdZL-vRYWWcsmtVKgH-mME" }  },
  base: "./",
});