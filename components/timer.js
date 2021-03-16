import { useState, useEffect } from 'react'
import breakpoints from '../styles/breakpoints'
import styled from 'styled-components'
// import Link from 'next/link'
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
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  background: rgb(16, 24, 78, 0.1);
  
  ${breakpoints.sm`
     margin: 1rem;
  `}

  ${breakpoints.md`
    margin: 2rem 10rem;
  `}

  ${breakpoints.lg`
    margin: 3rem 15rem;
    padding: 1rem;
  `}

${breakpoints.xl`
    margin: 3rem 35rem;
  `}


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
      const hCount = Math.floor(time.counter / 3600)
      const mCount = Math.floor((time.counter / 60) % 60)
      const sCount = time.counter % 60

      const newHr = String(hCount).length === 1 ? `0${hCount}` : hCount
      const newMin = String(mCount).length === 1 ? `0${mCount}` : mCount
      const newSec = String(sCount).length === 1 ? `0${sCount}` : sCount

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
