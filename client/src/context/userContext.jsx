import { useReducer, createContext } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext();

const initialUserState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {
      id: "",
      name: "",
      token: null,
    };

const userReducer = (userState, userAction) => {
  switch (userAction.type) {
    case "LOGIN_USER":
      return (userState = userAction.user);
    case "LOGOUT_USER":
      return (userState = {
        id: "",
        name: "",
        token: null,
      });
    default:
      return userState;
  }
};

const UserContextProvider = ({ children }) => {
  // navigate
  let navigate = useNavigate();

  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);

  const loginUser = (user) => {
    dispatchUser({ type: "LOGIN_USER", user });
  };

  const logoutUser = () => {
    dispatchUser({ type: "LOGOUT_USER" });
    localStorage.removeItem("user");
    toast.info("登出成功，期待下次再見");
    navigate("/login");
  };

  const emptyUser = () => {
    dispatchUser({ type: "LOGOUT_USER" });
    localStorage.removeItem("user");
  };

  const value = {
    loginUser,
    logoutUser,
    emptyUser,
    userState,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
