import { useEffect, useContext } from "react";
import { Container, Typography } from "@mui/material";
import Tab from "../../components/Tab/Tab";
import quoteApi from "../../apis/quoteApi";
import { QuotesContext } from "../../context/quotesContext";
import Loader from "../../components/Loader/Loader";
import QuoteList from "../../components/QuoteList/QuoteList";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { motion } from "framer-motion";

const Home = () => {
  // pull out the state and set function from context
  const { quotes, setQuotes, filter } = useContext(QuotesContext);

  const { userState } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    document.title = "曾氏工程公司";
    const fetchQuotes = async () => {
      try {
        const res = await quoteApi.get("/", {
          headers: { "x-access-token": userState.token },
        });
        const sortedQuotes = res.data.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });

        setQuotes(sortedQuotes);
      } catch (error) {
        console.log(error.message);
        navigate("/login");
      }
    };
    fetchQuotes();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        pb: 10,
      }}
    >
      {quotes ? (
        <>
          <h1>曾氏工程公司</h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <SearchBar />
            <QuoteList quotes={quotes} filter={filter} id="quote-list" />
          </motion.div>

          <Tab iconType="add" />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Home;
