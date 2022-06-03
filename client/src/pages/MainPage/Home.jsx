import { useEffect, useContext } from 'react'
import { Container, Typography } from '@mui/material'
import Tab from '../../components/Tab/Tab'
import quoteApi from '../../apis/quoteApi'
import { QuotesContext } from '../../context/quotesContext'
import Loader from '../../components/Loader/Loader'
import QuoteList from '../../components/QuoteList/QuoteList'

const Home = () => {
  // pull out the state and set function from context
  const { quotes, setQuotes } = useContext(QuotesContext);

  useEffect(() => {
    document.title = '曾氏工程公司'
    const fetchQuotes = async () => {
      try {
        const res = await quoteApi.get('/');
        setQuotes(res.data.data);        
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchQuotes()
  }, [])

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', pb: 10}}>
      <h1>曾氏工程公司</h1>
      {(quotes ? <QuoteList quotes={quotes} id="quote-list" /> : <Loader />)}
      <Tab iconType='add' />
    </Container>
  )
}

export default Home