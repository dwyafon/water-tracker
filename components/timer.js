import { useState, useEffect } from 'react'
import breakpoints from '../styles/breakpoints'
import styled from 'styled-components'
import Link from 'next/link'
import Console from '../components/console'

const Container = styled.div`

  margin: 1rem;
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  /* overflow: none; */
  /* min-width: 100vw; */
`

const Time = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Timer = ({ litres, hours }) => {
  const average = (Math.round((litres / hours) * 100) / 100)

  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    counter: 0,
  })

  useEffect(() => {
    const timerID = setInterval(() => {
      const sCount = time.counter % 60
      const mCount = time.counter >= 3600 ? Math.floor((time.counter / 60) - 60) : Math.floor(time.counter / 60)
      const hCount = Math.floor(time.counter / 3600)

      const newSec = String(sCount).length === 1 ? `0${sCount}` : sCount
      const newMin = String(mCount).length === 1 ? `0${mCount}` : mCount
      const newHr = String(hCount).length === 1 ? `0${hCount}` : hCount

      setTime((prevState) => ({
        seconds: newSec,
        minutes: newMin,
        hours: newHr,
        counter: prevState.counter + 1,
      }))
    }, 1000)
    return () => clearInterval(timerID)
  }, [time.counter])

  return (
    <Container>
      <Time>
        <span className='hours'>{time.hours}</span>
        <span>:</span>
        <span className='minutes'>{time.minutes}</span>
        <span>:</span>
        <span className='seconds'>{time.seconds}</span>
      </Time>
      <Console average={average}/>
    </Container>
  )
}

export default Timer
