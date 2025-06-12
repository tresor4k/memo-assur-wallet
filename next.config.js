/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration Vercel optimisée selon documentation officielle
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // Optimisations production
  compress: true,
  poweredByHeader: false,

  // Images optimisées pour Vercel
  images: {
    domains: ['ykobrxoeqtyeyfcntcfm.supabase.co'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Configuration expérimentale pour Vercel
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },

  // Variables d'environnement exposées
  env: {
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },
};

module.exports = nextConfig;
