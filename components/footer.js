import styled from 'styled-components'
import Link from 'next/link'
import breakpoints from '../styles/breakpoints'

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  color: #0c1629;
  background-color: #ccc;
  min-width: 100%;

  ${breakpoints.sm`
    justify-content: center;
    align-items: center;
  `}

  ${breakpoints.md`
    justify-content: flex-end;
`}
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  ${breakpoints.sm`
    flex-direction: column;
  `}

  ${breakpoints.md`
    flex-direction: row;
    justify-content: flex-end;
`}
`

const Footer = () => {
  return (
    <Container>
      <List>
        <Link href='/terms-and-conditions'>
          <a className='link'>Terms and Conditions</a>
        </Link>
        <Link href='/guidelines'>
          <a className='link'>Guidelines</a>
        </Link>
        <Link href='/about'>
          <a className='link'>About</a>
        </Link>
      </List>
    </Container>
  )
}

export default Footer
