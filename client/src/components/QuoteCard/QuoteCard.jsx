import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import quoteApi from "../../apis/quoteApi";
import { useContext } from "react";
import { QuotesContext } from "../../context/quotesContext";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";

const QuoteCard = ({ quote }) => {
  const { quotes, setQuotes } = useContext(QuotesContext);
  const { userState } = useContext(UserContext);

  const handleDelete = async (id) => {
    try {
      await quoteApi.delete(`/${id}`, {
        headers: { "x-access-token": userState.token },
      });
      setQuotes(quotes.filter((quote) => quote.id !== id));
      toast.success("已刪除報價單");
    } catch (error) {
      toast.error(`刪除報價單失敗：${error.message}`);
    }
  };

  return (
    <Card
      sx={{ width: "350px", textAlign: "left", marginTop: "1rem" }}
      className="quote-card"
      data-cy="quote-card"
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {quote.address}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          客戶: {quote.name}
          <br />
          日期: {new Date(quote.updatedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button size="small" sx={{ fontWeight: 800 }} variant="outlined">
          <Link
            to={`/${quote.id}`}
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "inherit",
              fontSize: "15px",
            }}
          >
            查看
          </Link>
        </Button>

        <Button
          sx={{ ml: 3, fontWeight: 800 }}
          color="error"
          variant="outlined"
          onClick={() => handleDelete(quote.id)}
          data-testid="delete-quote-btn"
        >
          <span>刪除</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuoteCard;
