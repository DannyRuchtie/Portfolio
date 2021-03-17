import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { play } from "../content/play.js";
import Cards from "../components/cards";

function Play(props) {
  const Layout = styled.div`
    display: grid;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: var(--lineHeight);
    grid-row-gap: var(--lineHeight);

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  `;

  return (
    <Layout>
      <Helmet>
        <title>Playground - Danny Ruchtie</title>
        <meta
          name="description"
          content="Dutch designer with experience in helping organizations grow and innovate through design. "
        />
      </Helmet>

      <Grid>
        {play.map((data, key) => {
          return (
            <Cards key={key} img={data.img} alt={data.alt} url={data.url} />
          );
        })}
      </Grid>
    </Layout>
  );
}

export default Play;
