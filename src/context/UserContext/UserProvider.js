import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const login = (user) => {
    if (user.username === "testUser" && user.password === "test@123") {
      setUser(user);
    } else {
      alert("Invalid user.");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const context = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
