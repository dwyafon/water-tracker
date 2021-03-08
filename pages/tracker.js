import Layout from '../components/layout'
import Timer from '../components/timer'
import Console from '../components/console'
// import styled from 'styled-components'





const Tracker = ({ litres, hours }) => {
  return (
    <Layout>
      <Timer litres={litres} hours={hours} />
    </Layout>
  )
}

export default Tracker
