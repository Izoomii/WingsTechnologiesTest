import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { UserContext } from "./Contexts/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

const backgroundColor = "#f7f7f7";

function App(): JSX.Element {
  const creds = localStorage.getItem("user");
  const [credentials, setCredentials] = useState<any>(
    creds ? JSON.parse(creds) : null
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ credentials, setCredentials }}>
        <Stack minHeight={"100vh"} flexGrow={1} bg={backgroundColor}>
          <Header />
          <Stack flexGrow={1}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route
                path="posts"
                element={credentials ? <Posts /> : <Navigate to={"/login"} />}
              />
            </Routes>
          </Stack>
        </Stack>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
