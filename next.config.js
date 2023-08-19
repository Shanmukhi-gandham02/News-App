/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
  trailingSlash: true,
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.googleusercontent.com",
          port: "",
          pathname: "**",
        },
      ],
    }, 

}

module.exports = nextConfig
