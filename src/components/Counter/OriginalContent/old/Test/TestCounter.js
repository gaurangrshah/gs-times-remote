import React from "react"
import { Card } from "react-bootstrap"
import IconSpinner from "../../assets/iconSpinner"

const TestCount = ({ count, title, text, emoji }) => {
  return (
    <Card className="counter-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <IconSpinner emoji={emoji} />
        <div className="count">{parseInt(count)}</div>
      </Card.Body>
    </Card>
  )
}

export default TestCount
