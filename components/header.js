// import styles from '../styles/Home.module.css'
import { IoWaterOutline } from 'react-icons/io5'
import styled from 'styled-components'
import breakpoints from '../styles/breakpoints'
import Link from 'next/link'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
 
  padding: 2rem auto 0;
  min-width: 100%;

  ${breakpoints.sm`
    align-items: center;
    margin-top: 2.5rem;
  `}

  ${breakpoints.md`
    align-items: flex-start;
    padding-left: 2rem;
  `}
`

const AppName = styled.div`
  display: flex;
  color: #fff;
  font-size: 1.5rem;
`

const HeaderIcon = styled.div`
  margin-right: 0.5rem;
`

const HeaderName = styled.div`
  cursor:pointer;  
`

const SubHeader = styled.div`
  font-size: 0.9rem;
`

const Header = () => {
  return (
    <HeaderContainer>
      <AppName>
        {' '}
        <HeaderIcon>
          {' '}
          <IoWaterOutline />
        </HeaderIcon>
        <Link href='/'>
          <HeaderName> H20 Tracker</HeaderName>
        </Link>
      </AppName>
      <SubHeader>Stay on schedule and stay hydrated</SubHeader>
    </HeaderContainer>
  )
}

export default Header
