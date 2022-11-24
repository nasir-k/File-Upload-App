import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import "./App.css";
import { routes } from "./Routes/routes";
import { useContext } from "react";
import UserContext from "./context/UserContext/UserContext";

function App() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignoutClick = () => {
    userContext.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            File Manager
          </Typography>
          {userContext.user && (
            <Box>
              <Button color="inherit" onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={() => navigate("/filesView")}>
                Files
              </Button>
              <Button color="inherit" onClick={() => navigate("/fileUpload")}>
                Upload file
              </Button>

              <Button color="inherit" onClick={handleSignoutClick}>
                LogOut
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.path === "/" ? <Navigate to="login" /> : <route.element />
              }
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
