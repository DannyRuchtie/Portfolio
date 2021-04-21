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

function About(props) {
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

  const Aside = styled.aside`
    margin: 2rem 0;
    grid-area: aside;

    ul {
      padding: 0;
      margin: 0 0 1rem 0;
    }

    li {
      line-height: 1.5rem;
      list-style: none;
    }

    span {
      color: var(--PrimaryCopy);
      margin-right: calc(var(--lineHeight) / 8);
    }

    strong {
      color: var(--PrimaryCopy);
    }

    a {
      color: var(--SecondairyCopy);
      text-decoration: none;
      line-height: calc(var(--lineHeight * 2));
    }

    a:hover {
      color: var(--pink);
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
          content="https://www.dannyruchtie.com/about"
        />
        <meta property="og:type" content="website" />
      </Helmet>


      <img
        className="hero"
        src="./about/danny-ruchtie.jpg"
        alt="Danny Ruchtie"
      />

      <Article>
        <p>
          My name is Danny Ruchtie. I'm a Dutch designer, creator and manager
          focused on making technology accessible and easier to use through
          design. I'm passionate about building teams and products.
        </p>

        <p>
          I am currently helping the CodeSandbox team to make web development
          more accessible.
        </p>

        <p>
          Previously I led the growth platform IBM iX CIC team and the IBM
          Design Studio Benelux. I helped the auction site Catawiki with the
          design of their mobile platform.
        </p>

        <p>
          Before Catawiki, I worked for different agencies. Leading design teams
          and designed and consulted for companies like Shell, Samsung, Daimler,
          Heineken, Philips, and Albelli.
        </p>

        <p>
          When not designing, I'm probably having fun with my family or
          photographing the random beauty of everyday things.
        </p>
      </Article>

      <Aside>
        <ul>
          <li>
            <strong>Current</strong>
          </li>
          <li>
            <a href="https://codesandbox.io" target="blank">
              <span>Head of Design</span>, CodeSandbox
            </a>
          </li>

          <li>&nbsp;</li>

          <li>
            <strong>Previously</strong>
          </li>
          <li>
            <a href="https://ibm.nl" target="blank">
              <span>Growth Platform Leader,</span>IBM
            </a>
          </li>
          <li>
            <a href="https://ibm.com/nl-en/services/business" target="blank">
              <span>Design Lead, </span>IBM
            </a>
          </li>
          <li>
            <a href="https://catawiki.com" target="blank">
              <span>Sr. UX Designer, </span>Catawiki
            </a>
          </li>
          <li>
            <span>Design Lead, </span>Peperzaken
          </li>
          <li>
            <span>Design Lead, </span>Fur V.O.F.
          </li>
          <li>
            <span>Media Designer, </span>Weber Creatives
          </li>
          <li>
            <span>Media Designer, </span>De Smeth en Media
          </li>
          <li>
            <span>Media Designer, </span>Noa Media
          </li>
        </ul>
      </Aside>



    </Layout>
    </motion.div>
  );
}

export default About;
