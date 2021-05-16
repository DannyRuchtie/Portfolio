import React from "react";
import styled from "styled-components";
import { motion} from "framer-motion";
import { Helmet } from "react-helmet";



const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};


function Project(props) {
  const Layout = styled.div`
    display: grid;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    grid-column-gap: var(--lineHeight);
    grid-row-gap: var(--lineHeight);
    grid-template-areas: 
    "article  "
    "img"
    "img"
;
  `;

  const Article = styled.article`
    font-size:2rem;

    text-align: left;
    line-height: 48px;

    vertical-align: middle;
    letter-spacing: -0.01em;
    font-size: 40px;
    margin: 8rem 0;

  h1{
    color:var(--PrimaryCopy);
    font-weight:500;
    letter-spacing: -0.125rem;
    line-height:1.125em;
  }

  `;

  

  return (
    <Layout>
      <Helmet>
        <title>Catawiki- Danny Ruchtie</title>


      </Helmet>


      <motion.div  key="1" {...AnimationSettings}>
 
   
      <Article>
   

   
      <h1>Catawiki</h1>
  <p>Catawiki is an online auction house with around 14 million visitors per month. Buyers and sellers alike, they share a passion for their unique objects. You’ll discover lively stories behind special objects.</p>
  <p>I was hired to help design and grow the mobile apps and later bacame part of multiple product teams, overseeing multiple (cross-platform web, IOS, and Android) design projects at the same time.</p>
<p>The mobile apps have grown in two year from less 10% to 72% share of total Catawiki revenue. The number of unique app bidders is more than doubled.</p>

</Article> 

  <Grid>
  <img src="/images/work/catawiki/catawiki-2.jpg" />
  <img src="/images/work/catawiki/catawiki-0.jpg" />
  <img src="/images/work/catawiki/catawiki-1.jpg" />
  <img src="/images/work/catawiki/catawiki-3.jpg" />






  </Grid>


     




 
      </motion.div>


    </Layout>
  );
}

export default Project;
