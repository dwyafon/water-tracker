// import styles from '../styles/Home.module.css'
import { IoWaterOutline } from 'react-icons/io5'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-left: 1rem;
  padding-top: 1rem;
  min-width: 100%;
  max-width: 100%;
`

const AppName = styled.div`
  display: flex;
  color: #fff;
  font-size: 2rem;
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
            <HeaderName> H20 Tracker</HeaderName>
          </AppName>
          <SubHeader>Stay hydrated and stay on schedule</SubHeader>
        </HeaderContainer>

    )
  }
  
  export default Header
  