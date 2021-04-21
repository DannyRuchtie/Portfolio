import React from "react";
import styled from "styled-components";
import { motion} from "framer-motion";
import { Helmet } from "react-helmet";

import { play } from "../content/play.js";
import Cards from "../components/cards";

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};


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
    <motion.div  key="1" {...AnimationSettings}>
    <Layout>
      <Helmet>
        <title>Playground - Danny Ruchtie</title>
        <meta
          name="description"
          content="Dutch designer with experience in helping organizations grow and innovate through design."
        />
        <meta property="og:site_name" content="Danny  Ruchtie" />
        <meta property="og:title" content="About Danny Ruchtie" />
        <meta
          property="og:url"
          content="https://www.dannyruchtie.com/play"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Grid>
        {play.map((data, key) => {
          return (
            <Cards key={key} img={data.img} alt={data.alt} url={data.url} class="showcase" />
          );
        })}
      </Grid>
    </Layout>
    </motion.div>
  );
}

export default Play;
