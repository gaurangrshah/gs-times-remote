import React from "react"
import CountingCounter from "../../../../utils/useCounter"
import TestCount from "./TestCounter"

import { Counters } from "../../../../../dum_db/db"
const { worldPopulationGrowth } = Counters //counter data from db

const TestCounterPrep = Counters => {
  const {
    rate,
    initialCount,
    delay,
    title,
    text,
    emoji,
  } = worldPopulationGrowth

  const currCount = CountingCounter(initialCount, delay, rate) // useCounter implementation
  return <TestCount count={currCount} title={title} text={text} emoji={emoji} /> // presentational
}
export default TestCounterPrep
