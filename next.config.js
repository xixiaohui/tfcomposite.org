
import nextMdx from '@next/mdx'

const withMdx = nextMdx({ extension: /\.mdx?$/ })

const nextConfig = withMdx({
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  experimental: { legacyCss: true },
  output: 'standalone',
})

export default nextConfig