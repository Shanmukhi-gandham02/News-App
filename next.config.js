/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
 
    basePath: '/Shanmukhi-gandham02',
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
