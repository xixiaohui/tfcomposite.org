// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-4xl font-bold text-blue-600 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2" {...props} />
    ),
    p: (props) => (
      <p className="text-base text-gray-800 leading-relaxed mb-4" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc list-inside pl-4 text-gray-700 mb-4" {...props} />
    ),
    ...components,
  }
}
