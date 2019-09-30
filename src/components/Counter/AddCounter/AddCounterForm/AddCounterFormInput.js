import React from 'react'

const AddCounterFormInput = ({ inputName = "title" }) => {
  return (

    <label htmlFor={`${inputName}-input`}>{inputName}
      <input id={`${inputName}-input`} name={inputName} placeholder={`${inputName}`} autoComplete="off" />
    </label>

  )
}
export default AddCounterFormInput

/*
    rendered by AddCounterForm
*/
