import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h3>Hi from the second page</h3>
    <p>I built this site as a tool for me to easily check the current scores of the day and see what time games start. If you are interested in my work please check out <a href='http://www.EdWhe.com'> EdWhe.com </a>.</p>
    <Link to="/">Go back to the games</Link>
  </Layout>
)

export default AboutPage
