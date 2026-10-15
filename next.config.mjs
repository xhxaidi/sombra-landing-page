/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: import.meta.dirname },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
