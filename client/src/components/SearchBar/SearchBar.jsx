import { useContext } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { QuotesContext } from "../../context/quotesContext";

const SearchBar = () => {
  const { setFilter, filter } = useContext(QuotesContext);

  return (
    <Box component="form" noValidate>
      <TextField
        label="搜尋報價單"
        variant="outlined"
        sx={{ minWidth: "350px", backgroundColor: "#ffffff" }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </Box>
  );
};

export default SearchBar;
