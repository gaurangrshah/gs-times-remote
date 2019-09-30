import React from 'react'
import AddCounterFormInput from "./AddCounterFormInput"
import AddFormSubmits from "./AddFormSubmits"

const AddCounterForm = ({ formRef, handleSubmit, submitted }) => {
  console.log('submitted', typeof submitted, Array.isArray(submitted))
  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <AddCounterFormInput inputName="title" />
        <AddCounterFormInput inputName="text" />
        <AddCounterFormInput inputName="rate" />
        <AddCounterFormInput inputName="delay" />
        <AddCounterFormInput inputName="emoji" />
        <button type="submit">SUBMIT</button>
      </form>
      <AddFormSubmits submitted={submitted} />
    </>
  )
}

export default AddCounterForm
/*
    AddCounterForm gets wrapped by AddCounterFormPrep in ./index.js

    AddCounterFormPrep wraps AddCounterForm which Renders instances of AddCounterFormInput and renders AddFormSubmits to handle and display any submitted data to the front end.
*/
