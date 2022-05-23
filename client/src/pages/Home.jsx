import { Container } from '@mui/material'
import React from 'react'
import QuoteCard from '../components/QuoteCard/QuoteCard'
import Tab from '../components/Tab/Tab'

const Home = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>曾氏工程公司</h1>
      <QuoteCard />
      <Tab iconType='add' />
    </Container>
  )
}

export default Home