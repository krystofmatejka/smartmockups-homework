import React from 'react'
import Head from 'next/head'
import styled, {createGlobalStyle} from 'styled-components'
import {BREAKPOINTS} from '../theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;

    font-family: 'Montserrat', sans-serif;
  }
`

const Container = styled.div`
  max-width: 1055px;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: ${BREAKPOINTS.M}px) { {
    padding: 15px;
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
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default SpringApp
