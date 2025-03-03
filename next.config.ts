import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        canvas: false,
        encoding: false,
        path: false,
        stream: false,
      };
    }

    if (!isServer) {
      config.module = {
        ...config.module,
        rules: [
          ...(config.module?.rules || []),
          {
            test: /node-canvas/,
            use: 'null-loader',
          },
        ],
      };
    }

    return config;
  },
  
  // Add this to ensure PDF can be loaded
  async headers() {
    return [
      {
        source: '/kb_s_evolving_cv.pdf',
        headers: [
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;