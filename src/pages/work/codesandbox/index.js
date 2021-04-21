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
        <title>Work - Danny Ruchtie</title>
        <meta
          name="description"
          content="As head of design, I'm responsible for building the remote Design team and drive the design vision of our product(s). Helping to build an user centered culture across the product and engineering team. Besides shaping the design team and culture, I’m also helping out as Product Manager, acting as a bridge between the engineering and design team. 
          Providing stakeholders with visibility and updates of current projects and resources."
        />

      </Helmet>


      <motion.div  key="1" {...AnimationSettings}>
 
   
      <Article>
   

    
      <h1>CodeSandbox</h1>
  <p>As head of design at CodeSandbox, I'm responsible for building the remote Design team and drive the design vision of our product(s). Helping to build an user centered culture across the product and engineering team. Besides shaping the design team and culture, I’m also helping out as Product Manager, acting as a bridge between the engineering and design team. 
  Providing stakeholders with visibility and updates of current projects and resources.</p>

</Article> 

  <Grid>
      <img src="/images/work/codesandbox/csb-1.jpg" />
  <img src="/images/work/codesandbox/csb-0.jpg" />
  <img src="/images/work/codesandbox/csb-3.jpg" />
  <img src="/images/work/codesandbox/csb-2.jpg" />
  <img src="/images/work/codesandbox/csb-4.jpg" />
  </Grid>


     




 
      </motion.div>


    </Layout>
  );
}

export default Project;
