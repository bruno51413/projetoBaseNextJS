import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import {Container} from '../styles/pages/Home';

import Logo from '../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Logo />
    </Container>
  )
}

export default Home
