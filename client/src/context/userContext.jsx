import { useReducer, createContext } from 'react';

import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const initialUserState = {
    id: '',
    name: '',
    token: null
}

const userReducer = (userState, userAction) => {
    switch(userAction.type) {
        case "LOGIN_USER": 
            return userState = userAction.user;
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

    const value = {
        loginUser,
        userState
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider};