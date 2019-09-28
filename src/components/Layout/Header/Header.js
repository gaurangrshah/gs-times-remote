import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Row noGutters className="header-container justify-content-center">
    <Col>
      <header>
        <div className="header">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
      </header>
    </Col>
  </Row>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
