import React from "react";

import styled from "styled-components";

function Photo(props) {
  const Figure = styled.figure`
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: var(--lineHeight);
    break-inside: avoid;
    justify-content: start;

    img {
      grid-row: 1 / -1;
      grid-column: 1;
    }
  `;

  return (
    <Figure>
  
      <img
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}

        loading="lazy"

      />
    
    </Figure>
  );
}

export default Photo;
