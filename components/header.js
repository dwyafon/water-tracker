// import styles from '../styles/Home.module.css'
import { IoWaterOutline } from 'react-icons/io5'
import styled from 'styled-components'
import breakpoints from '../styles/breakpoints'
import Link from 'next/link'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
  padding: 1rem;
  min-width: 100%;

  ${breakpoints.sm`
    align-items: center;
  `}

  ${breakpoints.md`
    align-items: flex-start;
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

const HeaderName = styled.div``

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
