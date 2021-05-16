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
        <title>Ready to Mobile Apps - Danny Ruchtie</title>


      </Helmet>


      <motion.div  key="1" {...AnimationSettings}>
 
   
      <Article>
   

   
      <h1>Ready To Apps</h1>
  <p>With the innovative “ready to” services and the app, a new smart becomes a connected car. This connection creates an even easier way of urban mobility.</p><p>
  The tiresome search for free parking spaces and charging stations is now also a thing of the past. In addition, with the “ready to” services, the vehicle can be shared keylessly and enjoys free insurance coverage for all drivers who “book” a ride via the app.</p>
</Article> 

  <Grid>
  <img src="/images/work/readyto-mobile/readyto-mobile-2.jpg" />
  <img src="/images/work/readyto-mobile/readyto-mobile-4.jpg" />
  <img src="/images/work/readyto-mobile/readyto-mobile-0.jpg" />
  <img src="/images/work/readyto-mobile/readyto-mobile-1.jpg" />
  <img src="/images/work/readyto-mobile/readyto-mobile-3.jpg" />
  <img src="/images/work/readyto-mobile/readyto-mobile-5.jpg" />



  </Grid>


      </motion.div>


    </Layout>
  );
}

export default Project;
