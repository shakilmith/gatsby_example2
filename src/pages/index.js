import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'




export default function IndexPage(){
  return (
    <Layout>
      <h1>Hello I am index page.</h1>
      <p>Thanks for visiting me. I would love to work with you.</p>
      <Link to="/blog">Read Recent posts</Link>
    </Layout>
  )
}