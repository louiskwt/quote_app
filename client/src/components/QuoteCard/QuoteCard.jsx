import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const QuoteCard = () => {
  return (
    <Card sx={{ minWidth: '400px', textAlign: 'left', marginTop: '1rem' }}>
        <CardContent>
              <Typography variant="h5" component="div">
                  Quote Title
              </Typography>
              <Typography variant="body1">
                  Name: 
                  <br/>
                  Address:
              </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
         </CardActions>
    </Card>
  )
}

export default QuoteCard