import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/Footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header/>
    <div>
      {children()}

      <Footer data = {data}>
        Background made in Cinema 4D, iOS app in swift, site in react. <a href="mailto: codante@gmail.com">Email us</a> to ask anything. &copy; 2018
      </Footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`
