import React, { useState, useEffect, useRef } from 'react'
import AddCounterForm from "./AddCounterForm"

const AddCounterFormPrep = () => {
  const addCounterFormEl = useRef()
  const [submitted, setSubmitted] = useState([])

  useEffect(() => {
    if (submitted.length > 0) {
      const latestInput = submitted[submitted.length - 1] // select last item off the array
      // set local storate wtih latest updates:

      localStorage.setItem(latestInput.title, JSON.stringify(latestInput, null, 2))
    }
  }, [submitted])


  const handleSubmit = e => {
    e.preventDefault()
    // grab all form inputs to a array||nodelist
    const formInputs = [...addCounterFormEl.current.elements].filter(
      element => {
        // keep all elements that have a type of text||number
        return element.type === "text" || element.type === "number"
      }
    )

    const newSubmitted = formInputs.reduce((acc, input) => {
      // reduce [formInputs] to an object, as key=input.name: value=input.value
      return {
        ...acc,
        [input.name]: input.value,
      }
    }, {}) // initializes an empty object to add the accumulated items to.

    console.log('newSubmitted', newSubmitted)
    setSubmitted(prevSubmitted => {
      return [...prevSubmitted, newSubmitted]
    })

    return [...addCounterFormEl.current.elements].forEach((el) => {
      el.value = ""
    })
  }

  return (
    <AddCounterForm formRef={addCounterFormEl} handleSubmit={handleSubmit} submitted={submitted} />
  )
}

export default AddCounterFormPrep



/*
* AddCounterFormEl: creates reference to entire form rendered by AddCounterForm
  - this tracks all inputs to the from, and updates state on submit via `handleSubmit`
  - state is passed into AddCounterForm and handled as `submitted`
* returns AddCounterForm to render form

*/
