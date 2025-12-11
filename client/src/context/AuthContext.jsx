import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });

  // Load from localStorage when app starts
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("authUser");
    if (savedToken && savedUser) {
      setAuth({
        token: savedToken,
        user: JSON.parse(savedUser),
      });
    }
  }, []);

  function login(user, token) {
    setAuth({ user, token });
    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));
  }

  function logout() {
    setAuth({ user: null, token: null });
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
  }

  const value = {
    user: auth.user,
    token: auth.token,
    isAuthenticated: !!auth.token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
