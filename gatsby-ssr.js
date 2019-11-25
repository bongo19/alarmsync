/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')
const ProductDb = require('./src/assets/context').default

export const wrapRootElement = ({ element }) => {
    return <ProductDb>{element}</ProductDb>
}