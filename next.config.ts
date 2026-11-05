import type { NextConfig } from "next";

// Hebrew-only site. /he/privacy and /he/terms are linked from the app and the App Store listing: keep them.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/he", permanent: false },
      { source: "/:lang(en|fr)", destination: "/he", permanent: true },
      { source: "/:lang(en|fr)/:path*", destination: "/he/:path*", permanent: true },
      { source: "/he/how-to/:path*", destination: "/he#how", permanent: true },
      { source: "/privacy", destination: "/he/privacy", permanent: true },
      { source: "/terms", destination: "/he/terms", permanent: true },
      { source: "/support", destination: "/he/contact", permanent: true },
    ];
  },
};

export default nextConfig;
