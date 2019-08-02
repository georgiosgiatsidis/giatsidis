import React from "react"

import Layout from "../components/Layout"
import Profile from "../components/Profile"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
  </Layout>
)

export default IndexPage
