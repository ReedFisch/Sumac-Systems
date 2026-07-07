import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  isProd
    ? "script-src 'self' 'unsafe-inline' https://assets.calendly.com https://www.googletagmanager.com"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  isProd
    ? "connect-src 'self' https:"
    : "connect-src 'self' https: ws: wss: http://localhost:* http://127.0.0.1:*",
  "frame-src https://calendly.com https://*.calendly.com https://lookerstudio.google.com https://datastudio.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
];

const nextConfig: NextConfig = {
  compress: true,
  productionBrowserSourceMaps: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["motion"],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
