import '../styles/globals.css'

import { useState } from 'react'

const Application = ({ Component, pageProps }) => {
  const [litres, setLitres] = useState(0)
  const [hours, setHours] = useState(0)

  return <Component {...pageProps} litres={litres} setLitres={setLitres} hours={hours} setHours={setHours} />
}

export default Application
