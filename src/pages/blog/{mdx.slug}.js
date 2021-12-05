import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

export default function BlogPost({data}){

    return(
        <Layout>
    <p>{data.mdx.frontmatter.title}</p>
    <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <hr/>
        </Layout>
    )
}

//graphql data layer


export const query = graphql`
  query ($id: String){
    mdx(id:{eq:$id }){
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`