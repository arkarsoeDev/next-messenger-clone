/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  },
  webpack: (config) => {
    config.externals.push('encoding', /* add any other modules that might be causing the error */);
    return config;
  },
}

module.exports = nextConfig
