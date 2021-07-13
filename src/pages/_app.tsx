import React from 'react'
import Head from 'next/head'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;

    font-family: 'Montserrat', sans-serif;
  }
`

const SpringApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Smartmockups</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap' rel='stylesheet'/>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default SpringApp
