import {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import quoteApi from '../apis/quoteApi';
import Loader from '../components/Loader/Loader';
import { QuotesContext } from '../context/quotesContext'


const QuoteDetails = () => {
  const { id } = useParams();
  const {selectedQuote, setSelectedQuote} = useContext(QuotesContext);

  console.log(id)

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
    (selectedQuote ? <div>{selectedQuote.address}</div> : <Loader />)
  )
}

export default QuoteDetails