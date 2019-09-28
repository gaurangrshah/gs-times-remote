import React, { useState, useEffect } from "react"
import { Card } from "react-bootstrap"

import setCountInterval from "../../../../../utils/interval"

import IconSpinner from "../../../assets/iconSpinner"

import { Counters } from "../../../../../../dum_db/db"

const { worldPopulationGrowth } = Counters
// console.log(...worldPopulationGrowth) //works

const Counter = () => {
  const {
    rate,
    initialCount,
    delay,
    title,
    text,
    emoji,
  } = worldPopulationGrowth
  const [worldPopCount, setWorldPopCount] = useState(initialCount)
  useEffect(() => {
    setCountInterval(worldPopCount, setWorldPopCount, delay, rate)

    return () => {
      clearInterval(setCountInterval)
    }
  }, [])
  return (
    <Card className="counter-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <IconSpinner emoji={emoji} />
        <div className="count">{parseInt(worldPopCount)}</div>
      </Card.Body>
    </Card>
  )
}

export default Counter
