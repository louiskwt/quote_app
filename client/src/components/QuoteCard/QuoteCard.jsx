import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const QuoteCard = ({quote}) => {
  return (
    <Card sx={{ minWidth: '350px', textAlign: 'left', marginTop: '1rem' }}>
        <CardContent>
              <Typography variant="h6" component="div">
                  {quote.address}
              </Typography>
              <Typography variant="body1" sx={{ mt: 3 }}>
                  客戶: {quote.name}
                  <br/>
                  日期: {quote.updated_at}
              </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" sx={{ fontWeight: 800, fontSize: '1rem'}}>查看</Button>
         </CardActions>
    </Card>
  )
}

export default QuoteCard