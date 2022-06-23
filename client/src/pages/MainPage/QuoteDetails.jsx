import { Box, Button, Container } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import quoteApi from "../../apis/quoteApi";
import Loader from "../../components/Loader/Loader";
import Quote from "../../components/Quote/Quote";
import Tab from "../../components/Tab/Tab";
import { QuotesContext } from "../../context/quotesContext";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import { useReactToPrint } from "react-to-print";

const QuoteDetails = () => {
  const { id } = useParams();
  const { selectedQuote, setSelectedQuote } = useContext(QuotesContext);
  const { userState } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchQuoteDetail = async () => {
      try {
        const res = await quoteApi.get(`/${id}`, {
          headers: { "x-access-token": userState.token },
        });
        setSelectedQuote(res.data.data);
        document.title = res.data.data.address;
      } catch (error) {
        console.log(error.message);
        navigate("/login");
      }
    };

    fetchQuoteDetail();
  }, []);

  // pdf ref
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <Container>
      {selectedQuote ? (
        <Quote quote={selectedQuote} printRef={printRef} />
      ) : (
        <Loader />
      )}
      {selectedQuote && (
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ width: "60%", fontSize: "1.15rem", fontWeight: "bold" }}
            variant="contained"
            id="download-btn"
            color="primary"
            onClick={handlePrint}
            endIcon={<DownloadIcon />}
          >
            下載報價單
          </Button>
        </Box>
      )}
      <Tab iconType="edit" id={id} />
    </Container>
  );
};

export default QuoteDetails;
