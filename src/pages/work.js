import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { work } from "../content/work.js";
import Cards from "../components/cards";

function Work(props) {
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

  const Article = styled.article`
    margin: 2rem 0;
    grid-area: article;
  `;

  return (
    <Layout>
      <Helmet>
        <title>Work - Danny Ruchtie</title>
        <meta
          name="Work"
          content="Danny Ruchtie is a Dutch Designer / Creator / Manager focused on human-computer interaction, making technology accessible and easier to use through design.
          Danny is currently helping to make web development more accessible with the great CodeSandbox team."
        />
      </Helmet>

      <Grid>
        {work.map((data, key) => {
          return (
            <Cards
              key={key}
              img={data.img}
              alt={data.alt}
              detail={data.detail}
            />
          );
        })}
      </Grid>
    </Layout>
  );
}

export default Work;
