// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>My dog does not like German Shepherds.</p>
    <StaticImage
      alt="German Shepherd"
      src="https://www.rover.com/blog/wp-content/uploads/2019/11/german-shepherd-3712038_1920.jpg"
    />
  </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage