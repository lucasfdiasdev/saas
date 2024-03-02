/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "files.stripe.com", "subdomain", "utfs.io"],
  },
  reactStrictMode: false,
};

export default nextConfig;
