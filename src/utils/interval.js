const setCountInterval = (count, setCount, delay, rate) => {
  setInterval(() => {
    setCount(count => count + rate)
  }, delay)
}

export default setCountInterval
