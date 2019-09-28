import React from "react"
import { ListGroup } from "react-bootstrap"

const LinkHolder = () => {
  return (
    <ListGroup>
      <ListGroup.Item action href="https://getbootstrap.com" target="_blank">
        Bootstrap
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="https://react-bootstrap.github.io/"
        target="_blank"
      >
        react-bootstrap
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="https://react-icons.netlify.com"
        target="_blank"
      >
        react-icons
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
        target="_blank"
      >
        gatsby-plugin-sass
      </ListGroup.Item>
    </ListGroup>
  )
}

export default LinkHolder
