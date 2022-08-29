import React from "react";
import { Route, Routes } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";

import { Layout } from "./components/layout";
import { AuthorizedRoute } from "./components/AuthorizedRoute";
import { SignIn, SignUp, Home } from "./Pages";

function App() {
  // const notify = () => toast("Wow so easy!");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthorizedRoute>
            <Layout>
              <Home />
            </Layout>
          </AuthorizedRoute>
        }
      />
      <Route path="auth">
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
