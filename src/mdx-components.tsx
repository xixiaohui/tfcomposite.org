/* eslint-disable jsx-a11y/alt-text */
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

import {DownloadPDF} from './components/DownloadPDF'
import {ProductSpecsTable}  from './components/ProductSpecsTable'


 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h2 className="text-3xl font-semibold text-black mt-5 mb-3">{children}</h2>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-black mt-5 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-black mt-5 mb-3">{children}</h3>
    ),

    p: ({ children }) => (
      <p className="text-base text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 mb-4">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="ml-4 text-gray-700 mb-1">{children}</li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),

    DownloadPDF: DownloadPDF,

    ProductSpecsTable:ProductSpecsTable,

    ...components,
  }
}