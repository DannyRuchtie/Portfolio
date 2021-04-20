import React from "react";
import styled from "styled-components";
import { motion} from "framer-motion";
import { Helmet } from "react-helmet";

import Cards from "../components/cards";


const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};



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
          content="Dutch designer with experience in helping organizations grow and innovate through design."
        />
        <meta property="og:site_name" content="Danny  Ruchtie" />
        <meta property="og:title" content="About Danny Ruchtie" />
        <meta
          property="og:url"
          content="https://www.dannyruchtie.com/"
        />
        <meta property="og:type" content="website" />
      </Helmet>


      <motion.div  key="1" {...AnimationSettings}>
      <Grid>
        <Cards
          link="https://codesandbox.io"
          image="../images/temp.png"
          title="CodeSandbox"
          category="Design Lead at CodeSandbox"
        />
      </Grid>
      </motion.div>


    </Layout>
  );
}

export default Work;
