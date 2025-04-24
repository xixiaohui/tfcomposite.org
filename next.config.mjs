
import nextMdx from '@next/mdx'

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  
})

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],

  experimental: {
    css: {
      loader: 'postcss',
    },
  },
})

export default nextConfig