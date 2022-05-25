import {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import quoteApi from '../apis/quoteApi';
import Loader from '../components/Loader/Loader';
import Quote from '../components/Quote/Quote';
import { QuotesContext } from '../context/quotesContext'


const QuoteDetails = () => {
  const { id } = useParams();
  const {selectedQuote, setSelectedQuote} = useContext(QuotesContext);

  useEffect(() => {
    const fetchQuoteDetail = async () => {
      try {
        const res = await quoteApi.get(`/${id}`);
        setSelectedQuote(res.data.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchQuoteDetail();
  }, [])

  return (
    (selectedQuote ? <Quote quote={selectedQuote} /> : <Loader />)
  )
}

export default QuoteDetails