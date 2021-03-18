import breakpoints from '../styles/breakpoints'
import styled from 'styled-components'
import Layout from '../components/layout'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const TermsConditions = () => {
  return (
    <Layout>
      <Container>
        <h1>About</h1>
      </Container>
    </Layout>
  )
}

export default TermsConditions