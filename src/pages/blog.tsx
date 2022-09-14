import * as React from 'react'
import { graphql, HeadFC, StaticQueryDocument } from 'gatsby'
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`

// export const Head = () => <Seo title="My Blog Posts" />
export const Head : HeadFC = () => <Seo title="My Blog Posts"/>

export default BlogPage