import React, { useRef, useState, useEffect } from "react"

const UseForm2 = () => {
  const addCounterFormEl = useRef()
  const [submitted, setSubmitted] = useState([])

  useEffect(() => {
    if (submitted.length > 0) {
      const latestInput = submitted[submitted.length - 1] // select last item off the array
      // set local storate wtih latest updates:
      localStorage.setItem("useForm2", JSON.stringify(latestInput, null, 2))
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
    <>
      <form ref={addCounterFormEl} onSubmit={handleSubmit}>
        <label htmlFor="title-input">title
        <input id="title-input" name="title" placeholder="" autoComplete="off" />
        </label>
        <label htmlFor="text-input">text
        <input id="text-input" name="text" placeholder="" autoComplete="off" />
        </label>
        <label htmlFor="rate-input">rate
        <input id="rate-input" type="number" name="rate" placeholder="" autoComplete="off" />
        </label>
        <label htmlFor="delay-input">delay
        <input id="delay-input" type="number" name="delay" placeholder="" autoComplete="off" />
        </label>
        <label htmlFor="emoji-input">emoji
        <input id="emoji-input" name="emoji" placeholder="" autoComplete="off" />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        <h3 id="list-title">Submitted values</h3>
        <div aria-labelledby="list-title">
          {submitted.map((input, i) => (
            <div key={`pretendThisIsNotAnIndex${i}`}>
              title: {input.title}
              text: {input.text}
              rate: {input.rate}
              delay: {input.delay}
              emoji: {input.emoji}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default UseForm2

{/* https://codesandbox.io/s/vmwxjnv433?from-embed */ }
