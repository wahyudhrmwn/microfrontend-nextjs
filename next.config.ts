import type { NextConfig } from "next";
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        remotes: {
          dashboard: 'dashboard@http://localhost:3001/_next/static/remoteEntry.js',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;