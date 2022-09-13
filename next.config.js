const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
// next.config.js

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

// const withMDX = require('@next/mdx')

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  }],
  [withImages]],
  {
    images: {
      domains: ['picsum.photos']
      // remotePatterns: {
      //   protocol: 'https',
      //   hostname: 'picsum.photos'
      // }
    }
  }
)
