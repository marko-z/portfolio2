const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
// next.config.js

const withMDX = require('@next/mdx')({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: {providerImportSource: '@mdx-js/react',  /* otherOptions… */}
})

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  }],
  [withImages]],
  {
    images: {
      domains: ['picsum.photos']
      // remotePatterns: {
      //   protocol: 'https',
      //   hostname: 'picsum.photos'
      // }
    },
    env: {
      spaceId: '1uqcab2yeci1',
      accessToken: 'YD8hkdmeGr11TSzuHODTBJXbX-C6exJRKHifFBbH30U'
    }
  }
)
