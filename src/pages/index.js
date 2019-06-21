import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)}
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All Posts"
          keywords={[`blog`, `imperfect produce`, `engineering`, `tech`]}
        />
        {posts.map(({ node }) => {
          const { fields, frontmatter } = node
          const { slug, readingTime } = fields
          const title = frontmatter.title || fields
          const excerpt = frontmatter.excerpt || node.excerpt
          const { author, date } = frontmatter

          return (
            <div key={slug}>
              <PostTitle>
                <Link style={{ boxShadow: `none` }} to={slug}>
                  {title}
                </Link>
              </PostTitle>
              <small>
                {author} | {date} | {readingTime.text}
              </small>
              <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            excerpt
          }
        }
      }
    }
  }
`
