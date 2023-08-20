/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
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
