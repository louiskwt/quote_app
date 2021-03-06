import { Typography } from "@mui/material";
import React from "react";
import QuoteCard from "../QuoteCard/QuoteCard";

const QuoteList = ({ quotes, filter }) => {
  return quotes.length > 0 ? (
    quotes
      .filter(
        (quote) =>
          quote.name.includes(filter) ||
          quote.address.includes(filter) ||
          quote.updatedAt.includes(filter)
      )
      .map((quote) => (
        <QuoteCard quote={quote} test-id={`quote-${quote.id}`} key={quote.id} />
      ))
  ) : (
    <Typography variant="h5" textAlign="center" fontWeight="bold">
      暫時沒有報價單...
    </Typography>
  );
};

export default QuoteList;
