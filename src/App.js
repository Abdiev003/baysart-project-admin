import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//** Layout Imports
import Layout from "./layout";

// ** Pages Imports
import Overview from "./pages/Overview";
import Pages from "./pages/Pages";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";
import SignInStep from "./pages/SignInStep";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/Resetpassword";
import Error from "./pages/Error";
import Wrong from "./pages/Wrong";

const App = () => {
  const isAuthenticated = localStorage.getItem("token") || true;

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <Routes>
            <Route path="/" index element={<Overview />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-in/step" element={<SignInStep />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Error />} />
          <Route path="/wrong" element={<Wrong />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
