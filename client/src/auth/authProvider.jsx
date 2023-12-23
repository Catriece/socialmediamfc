import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./authContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = ({ userInfo, token }) => {
    // LOGIN LOGIC
    setUser({ userInfo });
    localStorage.setItem("user", JSON.stringify({ userInfo }));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    // LOGOUT LOGIC
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
