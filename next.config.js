/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',
 
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
