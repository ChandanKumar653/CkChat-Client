// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  var [token, setToken] = useState(localStorage.getItem("ckChatLoginToken"));

  const [decoded, setDecoded] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
console.log("token from auth: ",token);
console.log("isAuthenticated: ",isAuthenticated);
  useEffect(() => {
    const checkAuth = () => {
      if (!token) {
        setIsAuthenticated(false);
        navigate("/sign-in", { replace: true });
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("ckChatLoginToken");
          setIsAuthenticated(false);
          navigate("/sign-in", { replace: true });
        } else {
          setDecoded(decodedToken);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("ckChatLoginToken");
        setIsAuthenticated(false);
        navigate("/sign-in", { replace: true });
      }
    };

    checkAuth();
  }, [token, navigate]);

  const login = (newToken) => {
    localStorage.setItem("ckChatLoginToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("ckChatLoginToken");
    setToken(null);
    setIsAuthenticated(false);
    navigate("/sign-in", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ token, decoded, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
