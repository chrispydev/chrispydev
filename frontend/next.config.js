/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
// https://cdn.sanity.io/images/cz5sk2i8/production/742b2a799f509b223240d7a1da4b39c84b2b0c1e-1291x617.png)
