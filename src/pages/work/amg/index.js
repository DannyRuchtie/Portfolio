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
  }

  `;


  

  return (
    <Layout>
      <Helmet>
        <title>Mercedes AMG</title>
        <meta
          name="description"
          content="The innovative AMG services and the app, a new smart becomes a connected car."
        />

      </Helmet>


      <motion.div  key="1" {...AnimationSettings}>
 
   
      <Article>
   

    
      <h1>Mercedes AMG</h1>
  <p>
  With the innovative AMG services and the app, a new smart becomes a connected car. This connection creates an even easier way of urban mobility.
The app turns the smartphone into a digital control center for the car. Here you can view the vehicle status or control vehicle functions. The App was designed by the IBM iX together with Daimler mobility services but was never released to the public</p>

</Article> 

  <Grid>
  <img src="/images/work/amg/amg-0.jpg" />
  <img src="/images/work/amg/amg-1.jpg" />
  <img src="/images/work/amg/amg-4.jpg" />
  <img src="/images/work/amg/amg-2.jpg" />





  </Grid>


     




 
      </motion.div>


    </Layout>
  );
}

export default Project;
