import {
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// format price
const intlNum = new Intl.NumberFormat("en-US");

const Item = ({ content, index }) => {
  return (
    <>
      <Grid item xs={8} fontSize="large">
        {index + 1}. {content.item}
      </Grid>
      <Grid item xs={4} fontSize="large">
        $ {intlNum.format(content.price)}
      </Grid>
    </>
  );
};

const Memo = ({ memoItem, index }) => {
  return (
    <>
      <Grid item xs={12} fontSize="large">
        {index + 1}. {memoItem}
      </Grid>
    </>
  );
};

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
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 3,
      }}
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
        <Typography as="span" fontWeight="bold" fontSize="1.2rem">
          客戶： {quote.name}
        </Typography>
        <Typography as="span" fontWeight="bold" fontSize="1.2rem">
          地址：{quote.address}
        </Typography>
        <Typography as="span" fontWeight="bold" fontSize="1.2rem">
          日期：{date.toLocaleDateString()}
        </Typography>
      </Stack>
      <Divider sx={{ borderColor: "#000000", mt: 3 }} />
      <Grid container rowSpacing={5} spacing={5} sx={{ mt: 2, mb: 5 }}>
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
      <Divider sx={{ borderColor: "#000000", mt: 3 }} />
      <Grid container rowSpacing={3} spacing={5} sx={{ pl: 15, mt: 2, mb: 5 }}>
        <Grid item xs={7}></Grid>
        <Grid item xs={5} fontSize="large" sx={{ letterSpacing: "1px" }}>
          <Box>總數:</Box>
          <Box mt={3}>${intlNum.format(totalPrice)}</Box>
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} spacing={5} sx={{ mt: 2, mb: 5 }}>
        <Grid item xs={12} sx={{ mt: 2 }} fontSize="large">
          工程備忘：
        </Grid>
        {quote.memo &&
          quote.memo.map((memoItem, index) => (
            <Memo memoItem={memoItem} key={index} index={index} />
          ))}
      </Grid>
      <Box
        sx={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}
      >
        <Button
          sx={{ width: "60%", fontSize: "1.15rem", fontWeight: "bold" }}
          variant="contained"
          id="download-btn"
          color="primary"
          onClick={savePDF}
          endIcon={<DownloadIcon />}
        >
          下載報價單
        </Button>
      </Box>
    </Container>
  );
};

export default Quote;
