import * as React from 'react'
import { Link, HeadFC } from "gatsby";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt='a friggin dawg' src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'/>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head : HeadFC = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage