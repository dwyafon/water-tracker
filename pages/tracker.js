import Layout from '../components/layout'
import Timer from '../components/timer'

const Tracker = ({ litres, hours }) => {
  return (
    <Layout>
      <Timer litres={litres} hours={hours} />
    </Layout>
  )
}

export default Tracker
