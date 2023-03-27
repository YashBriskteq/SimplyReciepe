import React from "react";
import AllReciepes from "../components/AllReciepes";
import Layout from "../components/Layout";

const reciepes = () => {
  return (
    <Layout>
      <div className="page">
        <AllReciepes />
      </div>
    </Layout>
  );
};

export default reciepes;
