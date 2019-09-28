import React, { useRef, useState, useEffect } from "react"

const UseForm2 = () => {
  const addCounterFormEl = useRef()
  const [submitted, setSubmitted] = useState([])

  // console.log(addCounterFormEl.current.elements)
  useEffect(() => {
    console.log("submitted")
    // localStorage.setItem("useForm2", JSON.stringify(submitted, null, 1))
    // console.log(localStorage.getItem("useForm2"))
  }, [submitted])

  const handleSubmit = e => {
    e.preventDefault()

    // convert form's nodelist to an array
    const formInputs = Array.apply(null, ...addCounterFormEl.current.elements).filter(
      element => element.type === "text" && "number"
    )

    console.log('formInputs', typeof formInputs, formInputs)

    console.log('running reduce')
    const newSubmitted = formInputs.reduce((acc, input) => {
      console.log(input.name, input.value, 'acc', acc)
      return {
        ...acc,
        [input.name]: input.value,
      }
    })

    setSubmitted(prevSubmitted => {
      console.log("setting state", newSubmitted)
      return [...prevSubmitted, newSubmitted]
    })
  }

  return (
    <>
      <form ref={addCounterFormEl} onSubmit={handleSubmit}>
        <label htmlFor="title-input">title</label>
        {/* <input id="title-input" name="title" placeholder="" pattern="/^\S*$/" /> */}
        <input id="title-input" name="title" placeholder="" />
        <label htmlFor="text-input">text</label>
        {/* <input id="text-input" name="text" placeholder="" pattern="^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$
        "/> */}
        <input id="text-input" name="text" placeholder="" />
        <label htmlFor="rate-input">rate</label>
        <input id="rate-input" name="rate" placeholder="" />
        <label htmlFor="delay-input">delay</label>
        <input id="delay-input" name="delay" placeholder="" />
        <label htmlFor="emoji-input">emoji</label>
        <input id="emoji-input" name="emoji" placeholder="" />
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        {/* https://codesandbox.io/s/vmwxjnv433?from-embed */}
        <h3 id="list-title">Submitted values</h3>
        <ol aria-labelledby="list-title">
          {submitted.map((input, i) => (
            <li key={`pretendThisIsNotAnIndex${i}`}>
              title: {input.title}
              text: {input.text}
              rate: {input.rate}
              delay: {input.delay}
              emoji: {input.emoji}
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default UseForm2
