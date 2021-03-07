import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(45deg, #472718, #1ccd99);
  background-size: cover;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
