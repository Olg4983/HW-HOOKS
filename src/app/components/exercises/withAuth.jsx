import React from "react";

const withAuth = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleOnLogin = () => {
        localStorage.setItem("user", "name");
        console.log("login");
    };
    const handleOnLogOut = () => {
        localStorage.removeItem("user");
        console.log("logout");
    };
    return (
        <Component
            {...props}
            isAuth={isAuth}
            onLogin={handleOnLogin}
            onLogOut={handleOnLogOut}
        />
    );
};

export default withAuth;
