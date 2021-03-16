import { useState, createContext } from 'react'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Confirmation from '../components/confirmation'
import breakpoints from '../styles/breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  margin-bottom: 2rem;
`

const Intro = styled.h2`
  color: #fff;
  text-align: center;

  ${breakpoints.sm`
    font-size: 1.2rem;
    padding: 0 0.5rem;
  `}

  ${breakpoints.md`
    font-size: 2rem;
    padding: 0 3rem;
  `}

  ${breakpoints.lg`
    font-size: 2.5rem;
    padding: 0 10rem;
  `}
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  max-width: 90%;
  padding: 1rem 2rem 1rem;
  background: rgb(16, 24, 78, 0.1);
`

const Prompt = styled.label`
  text-align: center;
  margin-bottom: 1rem;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.8rem 6rem;
  color: #fff;
  margin-left: 0.5rem;
`

const Form = ({ litres, setLitres, hours, setHours }) => {
  const [submitted, setSubmitted] = useState(true)

  const handleLitres = (e) => {
    let result = parseInt(e.target.value)
    setLitres(result)
  }

  const handleHours = (e) => {
    let result = parseInt(e.target.value)
    setHours(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (litres <= 0 || hours <= 0) {
      return
    } else {
      setSubmitted(!submitted)
    }
  }

  return (
    <Container>
      {' '}
      <Intro>
        An app to help you set and track your water consumption, meet your
        goals, and support your health
      </Intro>
      <FormContainer>
        <Prompt>How many litres of water do you want to drink today?</Prompt>
        <input onChange={handleLitres} type='number' required />
        <Prompt>Over how many hours do you want to drink this amount?</Prompt>
        <input onChange={handleHours} type='number' required />
        {submitted && litres > 0 && hours > 0 && (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
        {!submitted && litres > 0 && hours > 0 && (
          <Confirmation
            litres={litres}
            hours={hours}
            handleSubmit={handleSubmit}
          />
        )}
      </FormContainer>
    </Container>
  )
}

export default Form
