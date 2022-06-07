import { Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../apis/userApi";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  let navigate = useNavigate();

  const { loginUser, emptyUser } = useContext(UserContext);

  useEffect(() => {
    document.title = "登入";
    emptyUser();
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const signInFormData = {
      name,
      password,
    };
    try {
      const res = await userApi.post("/signin", signInFormData);
      loginUser(res.data);
      toast.success(`登入成功，歡迎 ${res.data.name}`);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("登入失敗，請確認帳號密碼");
    }
  };

  return (
    <Container
      sx={{
        p: 10,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight="bold">
        請先登入
      </Typography>
      <TextField
        label="用户名"
        variant="outlined"
        sx={{ mt: 4 }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="密碼"
        type="password"
        variant="outlined"
        sx={{ mt: 4 }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" sx={{ mt: 5 }} onClick={handleLoginSubmit}>
        登入
      </Button>
    </Container>
  );
};

export default LoginPage;
