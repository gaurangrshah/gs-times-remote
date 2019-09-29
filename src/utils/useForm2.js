import React, { useRef, useState, useEffect } from "react"

const UseForm2 = () => {
  const addCounterFormEl = useRef()
  const [submitted, setSubmitted] = useState([])


  // console.log(addCounterFormEl.current.elements)
  useEffect(() => {
    // console.log("submitted", submitted)
    if (submitted.length > 0) {
      const latestInput = submitted[submitted.length - 1]
      // console.log(latestInput)
      localStorage.setItem("useForm2", JSON.stringify(latestInput, null, 2))
      // console.log("getstorage", JSON.parse(localStorage.getItem("useForm2")))
    }
  }, [submitted])


  const handleSubmit = e => {
    e.preventDefault()

    // convert form's nodelist to an array -- uncomment below if current method fails...
    // const formInputs = Array.apply(null, ...addCounterFormEl.current.elements).filter(
    const formInputs = [...addCounterFormEl.current.elements].filter(
      element => {
        // console.log(element.type)
        return element.type === "text" || element.type === "number"
      }
    )

    // check if formInputs is actually an array:
    // console.log('formInputs', Array.isArray([...formInputs]), formInputs)


    // reduce formInputs to an object, with the input.name as the key and input.value as the value
    // console.log('running reduce')
    const newSubmitted = formInputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.name]: input.value,
      }
    }, {})

    // set state with the new object:
    setSubmitted(prevSubmitted => {
      return [...prevSubmitted, newSubmitted]
    })

    // reset inputs
    return [...addCounterFormEl.current.elements].forEach((el) => {
      el.value = ""
    })
  }

  return (
    <>
      <form ref={addCounterFormEl} onSubmit={handleSubmit}>
        <label htmlFor="title-input">title</label>
        <input id="title-input" name="title" placeholder="" autoComplete="off" />
        {/* <input id="title-input" name="title" placeholder=""  pattern="/^\S*$/" autoComplete="off" /> */}
        <label htmlFor="text-input">text</label>
        <input id="text-input" name="text" placeholder="" autoComplete="off" />
        <label htmlFor="rate-input">rate</label>
        <input id="rate-input" type="number" name="rate" placeholder="" autoComplete="off" />
        <label htmlFor="delay-input">delay</label>
        <input id="delay-input" type="number" name="delay" placeholder="" autoComplete="off" />
        <label htmlFor="emoji-input">emoji</label>
        <input id="emoji-input" name="emoji" placeholder="" autoComplete="off" />
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
