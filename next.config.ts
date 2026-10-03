import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.io",
    "*.ngrok.app",
    "idalia-comfortable-ardis.ngrok-free.dev",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
};

export default nextConfig;
