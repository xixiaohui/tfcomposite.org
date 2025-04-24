
import nextMdx from '@next/mdx'

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  
})

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],

  experimental: {
    // This disables the use of LightningCSS for builds (Next.js 15+)
    legacyCss: true,
  },
})

export default nextConfig