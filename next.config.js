const withPlugins = require('next-compose-plugins')
// @ts-ignore
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
  options: {providerImportSource: '@mdx-js/react',  /* otherOptionsâ€¦ */}
})

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  }],
  [withImages]],
  {
    images: {
      domains: ['picsum.photos', 'images.ctfassets.net' ]
      // remotePatterns: {
      //   protocol: 'https',
      //   hostname: 'picsum.photos'
      // }
    },
  }
)
