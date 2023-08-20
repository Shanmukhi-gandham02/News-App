/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["firebase"],
    },
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
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }

}

module.exports = nextConfig
