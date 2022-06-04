import { Container } from '@mui/material';
import {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import quoteApi from '../../apis/quoteApi';
import Loader from '../../components/Loader/Loader';
import Quote from '../../components/Quote/Quote';
import Tab from '../../components/Tab/Tab';
import { QuotesContext } from '../../context/quotesContext'
import { useNavigate } from 'react-router-dom';


const QuoteDetails = () => {
  const { id } = useParams();
  const {selectedQuote, setSelectedQuote} = useContext(QuotesContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchQuoteDetail = async () => {
      try {
        const res = await quoteApi.get(`/${id}`);
        setSelectedQuote(res.data.data);
        document.title = res.data.data.address;
      } catch (error) {
        console.log(error.message);
        navigate('/login');
      }
    }
    fetchQuoteDetail();
  }, [])

  return (
    <Container>
      {selectedQuote ? <Quote quote={selectedQuote} /> : <Loader />}
      <Tab iconType='edit' id={id} />
    </Container>
  )
}

export default QuoteDetails