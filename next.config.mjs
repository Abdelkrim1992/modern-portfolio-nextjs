/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure webpack to properly handle Three.js and three-globe
  webpack: (config, { isServer }) => {
    // This is needed for three-globe which might use outdated import/export
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    };

    // Optional: avoid SSR for Three.js related components
    if (isServer) {
      config.externals = [...(config.externals || []), 'three', 'three-globe'];
    }

    return config;
  },
  // Add any transpile modules if needed
  transpilePackages: ['three-globe'],
};

export default nextConfig;
