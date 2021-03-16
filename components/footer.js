import styled from 'styled-components'
import Link from 'next/link'
import breakpoints from '../styles/breakpoints'

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  color: #000;
  background-color: #ddd;
  min-width: 100%;
  border-bottom: 1px solid #ddd;

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
        <Link href='/'>
          <a className='link'>Terms and Conditions</a>
        </Link>
        <Link href='/'>
          <a className='link'>Guidelines</a>
        </Link>
        <Link href='/'>
          <a className='link'>About</a>
        </Link>
      </List>
    </Container>
  )
}

export default Footer
