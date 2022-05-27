import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import quoteApi from '../../apis/quoteApi';
import { useContext } from 'react';
import { QuotesContext } from '../../context/quotesContext';

const QuoteCard = ({quote}) => {
  const {quotes, setQuotes } = useContext(QuotesContext)
  const handleDelete = async (id) => {
    try {
      await quoteApi.delete(`/${id}`);
      setQuotes(quotes.filter((quote) => quote.id !== id));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Card sx={{ width: '350px', textAlign: 'left', marginTop: '1rem' }}>
        <CardContent>
              <Typography variant="h6" component="div">
                  {quote.address}
              </Typography>
              <Typography variant="body1" sx={{ mt: 3 }}>
                  客戶: {quote.name}
                  <br/>
                  日期: {quote.updatedAt}
              </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/${quote.id}`} >
              <Button size="small" sx={{ fontWeight: 800, fontSize: '1rem' }}>查看</Button>
            </Link>
            <Button color='error' onClick={() => handleDelete(quote.id)}>刪除</Button>
         </CardActions>
    </Card>
  )
}

export default QuoteCard