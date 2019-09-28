/* eslint-disable */
import { useState, useEffect } from "react"
import setCountInterval from "./interval"

const CountingCounter = (initialCount = 0, interval = 100, rate = 0) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    setCountInterval(count, setCount, interval, rate)
    return () => {
      clearInterval(setCountInterval)
    }
  }, [])
  return count
}

export default CountingCounter
