/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "webcademy.ru"},
      {protocol: "https", hostname: "sun9-20.userapi.com"},
    ],
  },
};

export default nextConfig;
