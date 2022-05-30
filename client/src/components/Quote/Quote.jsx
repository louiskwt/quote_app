import { Container, Divider, Stack, Typography, Grid, Box, Button} from '@mui/material'

// format price
const intlNum = new Intl.NumberFormat('en-US');

const Item = ({ content, index }) => {
    return (
        <>
            <Grid item xs={1} sm={1} md={1} >
                <span>{index + 1}.</span> 
            </Grid>
            <Grid item xs={6} sm={7} md={7} >
                {content.item}
            </Grid>
            <Grid item xs={4} sm={4} md={4}  >
                $ {intlNum.format(content.price)}
            </Grid>
        </>
    )
}

const Memo = ({memoItem, index}) => {
    return (
        <>
            <Grid item xs={1}  >
                <span>{index + 1}.</span>
            </Grid>
            <Grid item xs={9}   >
                {memoItem}
            </Grid>
        </>
    )
}


const Quote = ({ quote }) => {
    // calculate the total price
    const totalPrice = quote.contents.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    // format date
    const date = new Date(quote.updatedAt);

    // save PDF Button
    const savePDF = () => {
        window.print();
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant='h5' fontWeight={800} fontSize='1.8rem' textAlign='center' >
                曾氏工程公司
            </Typography>
            <Stack sx={{ display: 'flex', alignItem: 'center', mt: 3 }} direction={{ xs: 'column' }} spacing={{ xs: 1, md: 2, }}>
                <Typography as="span" fontWeight='bold' fontSize='1.1rem'>客戶： {quote.name}</Typography>
                <Typography as="span" fontWeight='bold' fontSize='1.1rem'>地址：{quote.address}</Typography>
                <Typography as="span" fontWeight='bold'>日期：{date.toLocaleDateString()}</Typography>
            
            </Stack>
            <Divider sx={{ borderColor: '#000000', mt: 3 }}/>
            <Grid container rowSpacing={5} spacing={5}  sx={{ mt: 2, mb: 5 }}>
                <Grid item xs={8} sm={8}  >
                    工程項目：
                </Grid>
                <Grid item xs={4} sm={4} >
                    價錢
                </Grid>
                {quote.contents.map((content, index) => <Item content={content} index={index} key={index} />)}
            </Grid>
            <Divider sx={{ borderColor: '#000000', mt: 3 }} />
            <Grid container rowSpacing={3} spacing={5}  sx={{ pl: 10,  mt: 2, mb: 5 }}>
                <Grid item xs={5} sm={8}  >
                </Grid>
                <Grid item xs={5} sm={4} >
                    總數: $ {intlNum.format(totalPrice)} 
                </Grid>
            </Grid>
            <Grid container rowSpacing={3} spacing={5} sx={{ mt: 2, mb: 5 }}>
                <Grid item xs={12} sx={{ mt: 2 }} >
                    工程備忘：
                </Grid>
                {quote.memo && quote.memo.map((memoItem, index) => <Memo memoItem={memoItem} key={index} index={index} />)}
            </Grid>
            <Box sx={{ marginBottom: '2rem'}}>
                <Button fullwidth variant='contained' id="download-btn" color="primary" onClick={savePDF}>下載報價單</Button>
            </Box>
        
        </Container>
    )
}

export default Quote