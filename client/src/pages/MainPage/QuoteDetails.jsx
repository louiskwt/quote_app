import { Box, Button, Container } from "@mui/material";
import { useState, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import quoteApi from "../../apis/quoteApi";
import Loader from "../../components/Loader/Loader";
import Quote from "../../components/Quote/Quote";
import Tab from "../../components/Tab/Tab";
import { QuotesContext } from "../../context/quotesContext";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const QuoteDetails = () => {
  const { id } = useParams();
  const { selectedQuote, setSelectedQuote } = useContext(QuotesContext);
  const { userState } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
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

  const handleDownloadPDF = async (address) => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    const xPosition = isMobile ? 50 : 0;
    const pageWidth = isMobile ? pdfWidth * 0.6 : pdfWidth;
    const pageHeight = isMobile ? pdfHeight * 0.4 : pdfHeight;
    console.log(isMobile);
    console.log(xPosition, pageWidth, pageHeight);

    pdf.addImage(data, "PNG", xPosition, 0, pageWidth, pageHeight);
    pdf.save(`${address}`);
  };

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
            onClick={() => handleDownloadPDF(selectedQuote.address)}
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
