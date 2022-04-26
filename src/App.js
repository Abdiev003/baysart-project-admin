import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//** Layout Imports
import Layout from "./layout";

// ** Pages Imports
import Overview from "./pages/Overview";
import Pages from "./pages/Pages";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";

const App = () => {
  const isAuthenticated = localStorage.getItem("token") || false;

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
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
