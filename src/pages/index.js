import React from "react";
import Layout from "../components/Layout";
import { ExampleButton } from "../example/button";

const index = () => {
  return (
    <Layout>
      <ExampleButton>Click </ExampleButton>
      <h1>Home</h1>
    </Layout>
  );
};

export default index;
