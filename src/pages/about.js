import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about</h1>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  color: red;
`;

export default about;
