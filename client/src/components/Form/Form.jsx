import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { FormsContext } from "../../context/formsContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { UserContext } from "../../context/userContext";

const Form = ({ action, quote }) => {
  const {
    formState,
    handleContentInput,
    handleGeneralInput,
    addContent,
    deleteContent,
    handleFormSubmit,
    handleFormUpdate,
    addPaymentMethod,
    deletePayment,
    handlePaymentInput,
  } = useContext(FormsContext);

  const { userState } = useContext(UserContext);

  return (
    <>
      <Typography variant="h5" textAlign="center" fontWeight="bold">
        曾氏工程公司
      </Typography>
      {/* Info */}
      <Paper sx={{ p: 4, mt: 3 }}>
        <Typography variant="h6">客戶資訊</Typography>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <TextField
            label="客戶"
            id="name"
            value={formState.name}
            onChange={(e) => handleGeneralInput(e.target.id, e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <TextField
            label="地址"
            id="address"
            value={formState.address}
            onChange={(e) => handleGeneralInput(e.target.id, e.target.value)}
          />
        </FormControl>
      </Paper>
      {/* Content */}
      <Paper sx={{ p: 4, mt: 3 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3, justifyContent: "space-between" }}
        >
          <Typography variant="h6">工程細項</Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            onClick={addContent}
            data-testid="add-content"
          >
            增加細項
          </Button>
        </Stack>
        {formState.contents &&
          formState.contents.map((content, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="error"
                  onClick={() => deleteContent(content.id)}
                  startIcon={<DeleteIcon />}
                  data-testid="delete-content"
                >
                  刪除細項
                </Button>
              </Stack>
              <Box
                component="form"
                sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
              >
                <TextField
                  label="工序"
                  sx={{ mr: 4, width: "50ch" }}
                  id="item"
                  multiline
                  value={content.item}
                  onChange={(e) =>
                    handleContentInput(index, e.target.id, e.target.value)
                  }
                />
                <TextField
                  label="價錢"
                  id="price"
                  sx={{ width: "30ch" }}
                  value={content.price}
                  onChange={(e) =>
                    handleContentInput(index, e.target.id, e.target.value)
                  }
                />
              </Box>
            </div>
          ))}
      </Paper>
      {/* Memo */}
      <Paper sx={{ p: 4, mt: 3 }}>
        <Typography variant="h6">備注</Typography>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <TextField
            label="工程備忘 (如要開新行，請用 $ 分隔)"
            id="memo"
            value={formState.memo}
            onChange={(e) => handleGeneralInput(e.target.id, e.target.value)}
          />
        </FormControl>
      </Paper>
      <Paper sx={{ p: 4, mt: 3 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3, justifyContent: "space-between" }}
        >
          <Typography variant="h6">付款方法</Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            onClick={addPaymentMethod}
            data-testid="add-content"
          >
            增加細項
          </Button>
        </Stack>

        {/* Payment method */}
        {formState.payment_method &&
          formState.payment_method.map((payment, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="error"
                  onClick={() => deletePayment(payment.id)}
                  startIcon={<DeleteIcon />}
                  data-testid="delete-content"
                >
                  刪除細項
                </Button>
              </Stack>
              <Box
                component="form"
                sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
              >
                <TextField
                  label="付款資訊"
                  sx={{ mr: 4, width: "50ch" }}
                  id="info"
                  multiline
                  value={payment.info}
                  onChange={(e) => {
                    console.log(payment.info, payment.id);
                    console.log(e.target.value);
                    handlePaymentInput(index, e.target.id, e.target.value);
                  }}
                />
              </Box>
            </div>
          ))}
      </Paper>

      {action === "create" && (
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={(e) => handleFormSubmit(e, userState.token)}
          data-testid="create-form"
        >
          建立報價單
        </Button>
      )}
      {action === "edit" && (
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          onClick={(e) => handleFormUpdate(e, userState.token)}
        >
          更新報價單
        </Button>
      )}
    </>
  );
};

export default Form;
