// import React, { useState, useEffect } from "react"
import React from "react"
import { Card } from "react-bootstrap"
// import UseForm from "../../../utils/useForm"
import UseForm2 from "../../../utils/useForm2"

const AddCounter = () => {
  // const [formValues, setFormState] = useState({
  //   title: "",
  //   text: "",
  //   rate: "",
  //   delay: "",
  //   emoji: "",
  // })

  // useEffect(() => {
  //   console.log("formValues", formValues)
  // })

  // const updateFormState = updatedState => {
  //   console.log("updatedState", updatedState)
  //   setFormState({
  //     ...formValues,
  //     ...updatedState,
  //   })
  // }

  return (
    <Card className="counter-card">
      <Card.Body>
        +{/* <UseFrom /> */}
        <UseForm2 />
      </Card.Body>
    </Card>
  )
}

export default AddCounter

/*
updateFormState={updateFormState}
*/
