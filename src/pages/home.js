import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Cards from "../components/cards";

function Work(props) {
  const Layout = styled.div`
    display: grid;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: var(--lineHeight);
    grid-row-gap: var(--lineHeight);
  `;

  const Article = styled.article`
    margin: 2rem 0;
    grid-area: article;
  `;

  return (
    <Layout>
      <Helmet>
        <title>Work - Danny Ruchtie</title>
        <meta
          name="description"
          content="Dutch designer with experience in helping organizations grow and innovate through design. "
        />
      </Helmet>

      <Grid>
        <Cards
          link="https://codesandbox.io"
          image="../images/temp.png"
          title="CodeSandbox"
          category="Design Lead at CodeSandbox"
        />
      </Grid>
    </Layout>
  );
}

export default Work;
