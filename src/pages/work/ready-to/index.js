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
        <title>Ready to - Danny Ruchtie</title>


      </Helmet>


      <motion.div  key="1" {...AnimationSettings}>
 
   
      <Article>
   

   
      <h1>Ready To</h1>
  <p>The smart “ready to” app turns the smartphone into a digital control center for the car. You can view the vehicle status or control vehicle functions and use the innovative “ready to” services. Together with Daimler and other software suppliers, IBM designed and developed the Ready to apps for IOS and Android, Including Carplay and Android auto</p>
</Article> 

  <Grid>
  <img src="/images/work/readyto/readyto-0.jpg" />
  <img src="/images/work/readyto/readyto-1.jpg" />

  <img src="/images/work/readyto/readyto-3.jpg" />
  <img src="/images/work/readyto/readyto-4.jpg" />
  <img src="/images/work/readyto/readyto-2.jpg" />








  </Grid>


     




 
      </motion.div>


    </Layout>
  );
}

export default Project;
