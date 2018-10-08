import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import App from '../components/app'


const IndexPage = () => (
  <Layout>
    <App />
    <Link to='/about/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
