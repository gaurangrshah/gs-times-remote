/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Container fluid className="px-0 main">
            <Header siteTitle={data.site.siteMetadata.title} />
            <Navbar pageInfo={pageInfo} />
            <Row noGutters>
              <Col>
                <Container className="mt-5">
                  <main>{children}</main>
                </Container>
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      )
    }}
  />
)

export default Layout
