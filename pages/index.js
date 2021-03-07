import React from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Form from '../components/form'
import Confirmation from '../components/confirmation'

const Home = () => {
  return (
    <>
    <Layout>
      <Form />
      <Confirmation />
    </Layout>
    </>
  )
}

export default Home
