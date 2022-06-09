import { useContext, useState } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { QuotesContext } from "../../context/quotesContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { setQuotes, quotes } = useContext(QuotesContext);
  const [searchText, setSearchText] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e, searchText) => {
    if (searchText !== "") {
      e.preventDefault();
      const filteredQuotes = quotes.filter(
        (quote) =>
          quote.address.includes(searchText) ||
          quote.name.includes(searchText) ||
          quote.updatedAt.includes(searchText)
      );
      setQuotes(filteredQuotes);
    } else {
      navigate("/");
    }
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={(e) => {
        handleSubmit(e, searchText);
      }}
    >
      <TextField
        label="搜尋報價單"
        variant="outlined"
        sx={{ minWidth: "350px", backgroundColor: "#ffffff" }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
    </Box>
  );
};

export default SearchBar;
