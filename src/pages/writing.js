import React from "react";
import { motion} from "framer-motion";
import styled from "styled-components";
import { Helmet } from "react-helmet";





const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};




function Writing(props) {


  const Layout = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "hero hero hero"
      " aside article article ";

    .hero {
      grid-area: hero;
    }

    .hero > img {
      width: 1200px;
      height: 514px;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      grid-auto-columns: 1fr;
      grid-template-areas:
        "hero "
        "article  "
        "aside ";

      .hero > img {
        width: 1200px;
        height: auto;
        object-fit: fit;
      }
    }

    @media (max-width: 576px) {
      grid-auto-columns: 1fr;
      grid-template-areas:
        "hero "
        "article  "
        "aside ";
    }
  `;

  const Article = styled.article`
    column-count: 2;
    column-gap: var(--columnGap);
    align-content: top;
    margin: 2rem 0;
    grid-area: article;

    p {
      display: block;
      margin: 0 0 1rem 0;
    }

    @media (max-width: 768px) {
      column-count: 1;
    }

    h1 {
      color: var(--PrimaryCopy);
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      column-span: all;
    }
  `;



  return (





    
    <motion.div  key="1" {...AnimationSettings}>
    <Layout>
  
      <Helmet>
        <title>About - Danny Ruchtie</title>
        <meta
          name="description"
          content="Dutch designer with experience in helping organizations grow and innovate through design."
        />
        <meta property="og:site_name" content="Danny  Ruchtie" />
        <meta property="og:title" content="About Danny Ruchtie" />
        <meta
          property="og:url"
          content="https://www.dannyruchtie.com/writing"
        />
        <meta property="og:type" content="website" />
      </Helmet>


 

      <Article>


      </Article>



    </Layout>
    </motion.div>
  );
}

export default Writing;
