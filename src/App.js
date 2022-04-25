import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//** Layout Imports
import Layout from "./layout";

// ** Pages Imports
import Overview from "./pages/Overview";
import Pages from "./pages/Pages";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Overview />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
