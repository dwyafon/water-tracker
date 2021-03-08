import React from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Form from '../components/form'

const Home = ({ litres, setLitres, hours, setHours }) => {
  return (
    <>
      <Layout>
        <Form
          litres={litres}
          setLitres={setLitres}
          hours={hours}
          setHours={setHours}
        />
      </Layout>
    </>
  )
}

export default Home
