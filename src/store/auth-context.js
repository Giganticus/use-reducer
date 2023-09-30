import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //added for better IDE code-completion
});

export default AuthContext;
