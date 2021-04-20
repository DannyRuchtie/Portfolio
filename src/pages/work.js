import React from "react";
import { motion} from "framer-motion";
import styled from "styled-components";
import { Helmet } from "react-helmet";


import { work } from "../content/work.js";
import Cards from "../components/cards";


const stagger = {
  animate: {
      transition:{
          staggerChilderen:0.1
      }
  }
}


const AnimationSettings = {
  transition: { duration: 1 },
  initial: { opacity: 0, },
  animate: { opacity: 1 },
  exit: { opacity: 0,}
};



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

  return (
 
    <Layout>
      <Helmet>
        <title>Work - Danny Ruchtie</title>
        <meta
          name="description"
          content="My name is Danny Ruchtie. I'm a Dutch designer, creator and manager focused on making technology accessible and easier to use through design. "
        />
        <meta property="og:site_name" content="Danny  Ruchtie" />
        <meta property="og:title" content="About Danny Ruchtie" />
        <meta
          property="og:url"
          content="https://www.dannyruchtie.com/work"
        />
        <meta property="og:type" content="website" />
      </Helmet>



        <Grid>
 
          {work.map((data, key) => {
            return (
              <motion.div key="1" {...AnimationSettings}  >
              <Cards
                key={key}
                img={data.img}
                alt={data.alt}
                detail={data.detail}
              />
              </motion.div>
            );
          })}
    
        </Grid>
 
    </Layout>

  );
}

export default Work;
