import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { motion} from "framer-motion";

import { photos } from "../content/photos.js";
import Photo from "../components/photo";



const AnimationSettings = {
  transition: { duration: 1 },
  initial: { opacity: 0, },
  animate: { opacity: 1 },
  exit: { opacity: 0,}
};



function Photography(props) {
  const Layout = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
  `;

  const Grid = styled.div`
    column-count: 3;
    column-gap: var(--lineHeight);

    @media (max-width: 768px) {
      column-count: 2;
    }

    @media (max-width: 576px) {
      column-count: 1;
    }
  `;

  const Article = styled.article`
    margin: 2rem 0;
    grid-area: article;
  `;

  return (
    <Layout>
      <Helmet>
        <title>Photography - Danny Ruchtie</title>
        <meta
          name="description"
          content="Dutch designer with experience in helping organizations grow and innovate through design."
        />
        <meta property="og:site_name" content="Danny  Ruchtie" />
        <meta property="og:title" content="About Danny Ruchtie" />
        <meta
          property="og:url"
          content="https://www.dannyruchtie.com/photography"
        />
        <meta property="og:type" content="website" />
      </Helmet>


      <Grid>

      <motion.div  key="1" {...AnimationSettings}>

        {photos.map((data, key) => {
          return <Photo key={key} image={data.img} alt={data.alt} />;
        })}

      </motion.div>

      </Grid>
    </Layout>
  );
}

export default Photography;
