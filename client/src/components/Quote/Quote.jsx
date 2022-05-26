import { Container, Divider, Stack, Typography, Grid} from '@mui/material'

const Item = ({ content, index }) => {
    return (
        <>
            <Grid item xs={2} sm={1}  >
                <span>{index + 1}.</span> 
            </Grid>
            <Grid item xs={5} sm={8}  >
                {content.item}
            </Grid>
            <Grid item xs={5} sm={3} >
                ${content.price}
            </Grid>
            {content.subItems && content.subItems.map((subItem, index) => (
                <Grid item xs={12} sx={{ ml: 12 }}  >
                    {subItem}
                </Grid>
            ))}
        </>
    )
}

const Memo = ({memoItem, index}) => {
    return (
        <>
            <Grid item xs={2} sm={1}  >
                <span>{index + 1}.</span>
            </Grid>
            <Grid item xs={5} sm={8}  >
                {memoItem}
            </Grid>
        </>
    )
}


const Quote = ({ quote }) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h5' textAlign='center' >
            {quote.address}
        </Typography>
          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', mt: 3 }} direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4, }}>
            <Typography as="span">客戶： {quote.name}</Typography>
            <Typography as="span">日期：{quote.updatedAt}</Typography>
        </Stack>
        <Divider sx={{ borderColor: '#000000', mt: 3 }}/>
        <Grid container rowSpacing={5} spacing={5}  sx={{ mt: 2, mb: 5 }}>
            {quote.contents.map((content, index) => <Item content={content} index={index} key={index} />)}
            <Grid item xs={12} sx={{ mt: 2 }} >
                  註：
            </Grid>
            {quote.memo && quote.memo.map((memoItem, index) => <Memo memoItem={memoItem} key={index} index={index} /> )}
        </Grid>
    </Container>
  )
}

export default Quote