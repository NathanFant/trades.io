import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [signUp, setSignUp] = useState(false);

    const handleSignClick = (bool) => {
        setSignUp(bool);
    };

    return (
        <LoginContext.Provider value = {{ signUp, handleSignClick }} >
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext)
