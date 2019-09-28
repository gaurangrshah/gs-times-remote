import React from "react"
// import { useInput } from "./useInput"
import useLocalStorageState from "../utils/useLocalStorage"

// export default ({ updateFormState }) => {
export default () => {
  const {
    state: title,
    formHandler: { bind: bindTitle, reset: resetTitle },
  } = useLocalStorageState("title", "title", true)
  const {
    state: text,
    formHandler: { bind: bindText, reset: resetText },
  } = useLocalStorageState("text", "text", true)
  const {
    state: rate,
    formHandler: { bind: bindRate, reset: resetRate },
  } = useLocalStorageState("rate", "rate", true)
  const {
    state: delay,
    formHandler: { bind: bindDelay, reset: resetDelay },
  } = useLocalStorageState("delay", "delay", true)
  const {
    state: emoji,
    formHandler: { bind: bindEmoji, reset: resetEmoji },
  } = useLocalStorageState("emoji", "emoji", true)

  // const {
  //   value: title,
  //   bind: bindCounterTitle,
  //   reset: resetCounterTitle,
  // } = useInput("")
  // const {
  //   value: text,
  //   bind: bindCounterText,
  //   reset: resetCounterText,
  // } = useInput("")
  // const {
  //   value: rate,
  //   bind: bindCounterRate,
  //   reset: resetCounterRate,
  // } = useInput("")
  // const {
  //   value: delay,
  //   bind: bindCounterDelay,
  //   reset: resetCounterDelay,
  // } = useInput("")
  // const {
  //   value: emoji,
  //   bind: bindCounterEmoji,
  //   reset: resetCounterEmoji,
  // } = useInput("")

  function handleSubmit(e) {
    e.preventDefault()
    // updateFormState({ title, text, rate, delay, emoji })
    const values = { title, text, rate, delay, emoji }

    alert(JSON.stringify({ title, text, rate, delay, emoji }))
    console.log("values", values)
    localStorage.setItem(
      "form-data",
      JSON.stringify({ title, text, rate, delay, emoji })
    )

    resetTitle(e)
    resetText(e)
    resetRate(e)
    resetDelay(e)
    resetEmoji(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        title:
        <input type="text" {...bindTitle} />
      </label>
      <label htmlFor="text">
        text:
        <input type="text" {...bindText} />
      </label>
      <label htmlFor="rate">
        rate:
        <input type="text" {...bindRate} />
      </label>
      <label htmlFor="delay">
        delay:
        <input type="number" pattern="/^.{6,7}$/" {...bindDelay} />
      </label>
      <label htmlFor="emoji">
        emoji:
        <input type="text" {...bindEmoji} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
