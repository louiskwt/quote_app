import {
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  Box,
} from "@mui/material";

// format price
const intlNum = new Intl.NumberFormat("en-US");

const Item = ({ content, index }) => {
  return (
    <>
      <Grid item xs={1} sm={0.5} sx={{ mr: 0 }} fontSize="large">
        {index + 1}
      </Grid>
      <Grid item xs={8} sm={7.5} sx={{ ml: 0 }} fontSize="large">
        {content.item}
      </Grid>
      <Grid item xs={3} sm={4} sx={{ ml: 0 }} fontSize="large">
        ${intlNum.format(content.price)}
      </Grid>
    </>
  );
};

const Memo = ({ memoItem, index }) => {
  return (
    <>
      <Grid item xs={1} fontSize="large" sx={{ mr: 0 }}>
        {index + 1}
      </Grid>
      <Grid item xs={10} sm={11} sx={{ ml: 0 }} fontSize="large">
        {memoItem}
      </Grid>
    </>
  );
};

const PaymentMethod = ({ paymentInfo, index }) => {
  return (
    <>
      <Grid item xs={1} fontSize="large" sx={{ mr: 0 }}>
        {index + 1}
      </Grid>
      <Grid item xs={10} sm={11} sx={{ ml: 0 }} fontSize="large">
        {paymentInfo}
      </Grid>
    </>
  );
};

const Quote = ({ quote, printRef }) => {
  // calculate the total price
  const totalPrice = quote.contents.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  // format date
  const date = new Date(quote.updatedAt);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 3,
      }}
      id="quote"
      ref={printRef}
    >
      <Typography
        variant="h5"
        fontWeight={800}
        fontSize="1.8rem"
        textAlign="center"
      >
        曾氏工程公司
      </Typography>
      <Stack
        sx={{ display: "flex", alignItem: "center", mt: 3 }}
        direction={{ xs: "column" }}
        spacing={{ xs: 1, md: 2 }}
      >
        <Typography
          data-testid="client"
          as="span"
          fontWeight="bold"
          fontSize="1.1rem"
        >
          客戶： {quote.name}
        </Typography>
        <Typography as="span" fontWeight="bold" fontSize="1.1rem">
          地址：{quote.address}
        </Typography>
        <Typography as="span" fontWeight="bold" fontSize="1.1rem">
          日期：{date.toLocaleDateString()}
        </Typography>
      </Stack>
      <Divider sx={{ borderColor: "#000000", mt: 3 }} />
      <Grid container rowSpacing={3} spacing={2} sx={{ mt: 2, mb: 5 }}>
        <Grid item xs={8} sm={8} fontSize="large">
          工程項目：
        </Grid>
        <Grid item xs={4} sm={4} fontSize="large">
          價錢
        </Grid>
        {quote.contents.map((content, index) => (
          <Item content={content} index={index} key={index} />
        ))}
      </Grid>
      <Divider sx={{ borderColor: "#000000", mt: 2 }} />
      <Grid container rowSpacing={3} spacing={5} sx={{ pl: 15, mt: 2 }}>
        <Grid item xs={7} sm={8}></Grid>
        <Grid item xs={5} sm={4} fontSize="large" sx={{ letterSpacing: "1px" }}>
          <Box>總數:</Box>
          <Box mt={3}>${intlNum.format(totalPrice)}</Box>
        </Grid>
      </Grid>
      {quote.memo[0] !== "" && (
        <Grid container rowSpacing={3} spacing={5} sx={{ mb: 5 }}>
          {
            <Grid item xs={12} sx={{ mt: 2 }} fontSize="large">
              工程備忘：
            </Grid>
          }

          {quote.memo.map((memoItem, index) => (
            <Memo memoItem={memoItem} key={index} index={index} />
          ))}
        </Grid>
      )}

      {quote.payment_method && (
        <Grid container rowSpacing={3} spacing={5} sx={{ mb: 5 }}>
          {
            <Grid item xs={12} sx={{ mt: 2 }} fontSize="large">
              付款方法：
            </Grid>
          }

          {quote.payment_method.map((paymentInfo, index) => (
            <PaymentMethod
              paymentInfo={paymentInfo.info}
              key={index}
              index={index}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Quote;
