import React from "react";
import "../styles/global.css";
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;