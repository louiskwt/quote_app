import { useReducer, createContext } from 'react';

import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const initialUserState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {
    id: '',
    name: '',
    token: null
}

const userReducer = (userState, userAction) => {
    switch(userAction.type) {
        case "LOGIN_USER": 
            return userState = userAction.user;
        case "LogOUT_USER":
            return userState = {
                    id: '',
                    name: '',
                    token: null
            }
        default:
            return userState
    }
}

const UserContextProvider = ({children}) => {
    // navigate
    let navigate = useNavigate();

    const [userState, dispatchUser] = useReducer(userReducer, initialUserState);

    const loginUser = (user) => {
        dispatchUser({ type: "LOGIN_USER", user});
    };

    const logoutUser = () => {
        dispatchUser({ type: "LOGOUT_USER" });
        localStorage.removeItem('user');
        navigate('/login');
    }

    const value = {
        loginUser,
        logoutUser,
        userState
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider};