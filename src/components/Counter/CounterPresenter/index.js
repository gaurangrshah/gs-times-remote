import React from "react"
import CountingCounter from "../../../utils/useCounter"
import CounterPresenter from "./CounterPresenter"

import Counters from "../../../../dum_db/db2"

const CounterDeliver = () => {
  return Counters.map(counter => {
    const { key, rate, initialCount, delay, title, text, emoji } = counter
    const currCount = CountingCounter(initialCount, delay, rate)
    return (
      <CounterPresenter
        key={key}
        count={currCount}
        title={title}
        text={text}
        emoji={emoji}
      />
    )
  })
}
export default CounterDeliver
