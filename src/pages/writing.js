import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Cards from "../components/cards";

function Writing(props) {
  const Layout = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "title title title"
      "hero hero hero";

    h1 {
      grid-area: title;
    }

    .hero {
      grid-area: hero;
    }
  `;

  const Article = styled.article`
    margin: 2rem 0;
    grid-area: article;
  `;

  return (
    <Layout>
      <Helmet>
        <title>Writing - Danny Ruchtie</title>
        <meta
          name="description"
          content="Dutch designer with experience in helping organizations grow and innovate through design. "
        />
      </Helmet>

      <h1>Writing</h1>
    </Layout>
  );
}

export default Writing;
