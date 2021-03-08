import styled from 'styled-components'
import Link from 'next/link'
import breakpoints from '../styles/breakpoints'
import { useState, useEffect } from 'react'

const ConsoleContainer = styled.div`
  padding: 2rem 2rem;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Text = styled.div`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.5rem;
`

const Amount = styled.div`
  font-size: 4rem;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.8rem 6rem;
  color: #fff;
  margin-left: 0.5rem;
  cursor: pointer;
`

const Console = () => {
  const [amount, setAmount] = useState(0)

    const handleH2O = () => {
        setAmount(amount + 1)
    }

  return (
    <>
      <Text>
        Click the H2O button below each time you have finished drinking {}{' '}
        litres of water
      </Text>
      <ConsoleContainer>
        <Text>You have consumed</Text>
        <Amount>{amount}</Amount>
        <Text>litres of water so far</Text>

        <Button onClick={handleH2O}>H2O</Button>
      </ConsoleContainer>
    </>
  )
}

export default Console
