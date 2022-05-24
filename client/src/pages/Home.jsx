import { useEffect, useContext } from 'react'
import { Container } from '@mui/material'
import React from 'react'
import QuoteCard from '../components/QuoteCard/QuoteCard'
import Tab from '../components/Tab/Tab'
import quoteApi from '../apis/quoteApi'
import { QuotesContext } from '../context/quotesContext'

const Home = () => {
  // pull out the state and set function from context
  const { quotes, setQuotes } = useContext(QuotesContext);

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await quoteApi.get('/all');
      setQuotes(res.data.data);
    }

    fetchQuotes()
  }, [])

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>曾氏工程公司</h1>
      <QuoteCard />
      <Tab iconType='add' />
    </Container>
  )
}

export default Home