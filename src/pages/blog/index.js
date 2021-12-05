import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

//BlogPage component:
export default function BlogPage({data}){
return(
    <Layout>
      
      {/* All the blog data will come here.*/}
      {
     data.allMdx.nodes.map((node)=>(
         <article key={node.id}>
         <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
             <p>Posted: {node.frontmatter.date}</p>
         </article>
     ))
      }



    </Layout>
)
}


//graphiql data layer 

export const query = graphql`
  query{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, yyyy")
        }
        id
        slug
      }
    }
  }
`
