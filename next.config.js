const withNextIntl = require('next-intl/plugin')('./src/entities/next-intl/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
