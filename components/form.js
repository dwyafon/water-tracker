import { useState } from 'react'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Confirmation from '../components/confirmation'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`

const Intro = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 1.1rem;
  padding: 0.5rem;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 4px;
  max-width: 90%;
  padding: 1rem 2rem 1rem;
`

const Prompt = styled.label`
  text-align: center;
  margin-bottom: 1rem;
`

const Input = styled.input.attrs(() => ({
  type: 'number',
  placeholder: '0',
}))`
  border: 1px solid #fff;
  padding: 0.5rem 0.1rem;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  border-radius: 4px;
  background: transparent;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.8rem 6rem;
  color: #fff;
  margin-left: 0.5rem;
`

const Form = () => {
  const [litres, setlitres] = useState(0)
  const [hours, setHours] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleLitres = (e) => {
    let result = parseInt(e.target.value)
    setlitres(result)
  }

  const handleHours = (e) => {
    let result = parseInt(e.target.value)
    setHours(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(!submitted)
  }

  return (
    <Container>
      <Intro>
        An app to help you set and track your water consumption, meet your
        goals, and support your health
      </Intro>
      <FormContainer>
        <Prompt>How many litres of water do you want to drink today?</Prompt>
        <Input value={litres} onChange={handleLitres} required />
        <Prompt>Over how many hours do you want to drink this amount?</Prompt>
        <Input value={hours} onChange={handleHours} required />
        {!submitted && <Button onClick={handleSubmit}>Submit</Button>}
      </FormContainer>
      {submitted && <Confirmation litres={litres} hours={hours} handleSubmit={handleSubmit} />}
    </Container>
  )
}

export default Form
