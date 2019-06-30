import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import Profile from "../components/Profile"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
  </Layout>
)

export default IndexPage
