import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr 1fr auto;
  grid-template-columns: 100%;
  background: linear-gradient(45deg, #472718, #1ccd99) no-repeat center center;
  background-size: cover;
  overflow: auto;

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
