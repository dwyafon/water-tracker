import styled from 'styled-components'
import Link from 'next/link'
import breakpoints from '../styles/breakpoints'
import { useState, useEffect } from 'react'

const ConsoleContainer = styled.div`
  padding: 2rem 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgb(16, 24, 78, 0.1);

  ${breakpoints.sm`
     margin: 1rem;
  `}

  ${breakpoints.md`
    margin: 2rem 10rem;
  `}

  ${breakpoints.lg`
    margin: 3rem 15rem;
    padding: 3rem;
  `}

  ${breakpoints.xl`
    margin: 1.5rem 35rem;
  `}
`

const InstructionText = styled.div`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.5rem;

  ${breakpoints.sm`
    margin: 0.5rem 1rem ;
  `}

  ${breakpoints.md`
    margin: 2rem 10rem ;
  `}

  ${breakpoints.lg`
    margin: 2rem 16rem;
  `}

  ${breakpoints.xl`
    margin: 1.5rem 35rem;
  `}

`

const Text = styled.div`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.5rem;

  ${breakpoints.sm`
    margin: 0.5rem 1rem ;
  `}

  ${breakpoints.md`
    margin: 1rem 6rem ;
  `}
  ${breakpoints.lg`
    margin: 1rem 3rem;
  `}

  ${breakpoints.xl`
    margin: 1rem 2rem;
  `}
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

const Console = ({ average }) => {
  const [amount, setAmount] = useState(0)

  const handleH2O = () => {
    setAmount(amount + average)
  }

  return (
    <>
      <InstructionText>
        Click the H2O button below each time you have finished drinking{' '}
        {average} {average === 1 ? 'litre' : 'litres'} of water
      </InstructionText>
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
