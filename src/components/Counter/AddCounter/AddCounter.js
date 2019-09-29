// import React, { useState, useEffect } from "react"
import React from "react"
import { Card } from "react-bootstrap"
import AddCounterFormPrep from "./AddCounterForm/index"

const AddCounter = () => {
  return (
    <Card className="counter-card">
      <Card.Body>
        +<AddCounterFormPrep />
      </Card.Body>
    </Card>
  )
}

export default AddCounter
