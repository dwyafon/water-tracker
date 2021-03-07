import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  color: #0c1629;
  background-color: #ccc;
  /* padding: 0.5rem; */
  min-width: 100%;
  max-width: 100%;
`

const Footer = () => {
  return (
    <Container>
      <ul>
        <Link href='/terms-and-conditions'>
          <a className='link'>Terms and Conditions</a>
        </Link>
        <Link href='/guidelines'>
          <a className='link'>Guidelines</a>
        </Link>
        <Link href='/about'>
          <a className='link'>About</a>
        </Link>
      </ul>
    </Container>
  )
}

export default Footer
