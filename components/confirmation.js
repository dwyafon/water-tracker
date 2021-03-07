import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Layout from '../components/layout'
import Form from '../components/form'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Question = styled.h5`
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  color: #fff;
  margin-left: 1rem;
`

const Confirmation = () => {
  return (
    <Container>
      <Question>
        That's an average of x litre(s) every hour, over 5 hour(s). Is this correct?
      </Question>
      <ButtonContainer>
        <Button>Yes</Button>
        <Button>No</Button>
      </ButtonContainer>
    </Container>
  )
}

export default Confirmation
