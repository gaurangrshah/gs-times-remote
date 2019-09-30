import React from 'react'

const AddFormSubmits = ({ submitted }) => {
  return (
    <>
      <h3 id="list-title">Submitted values</h3>
      <div aria-labelledby="list-title">

        {submitted.map((input, i) => {
          console.log('submitted', submitted)
          return (
            <div key={`${input}-${i}`}>
              title: {input.title}
              text: {input.text}
              rate: {input.rate}
              delay: {input.delay}
              emoji: {input.emoji}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AddFormSubmits
/*
    Rendered by AddCounterForm
*/
