import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;

  img {
    margin-bottom: 0.5rem;
  }

  strong,
  span {
    display: block;
    font-size: 12px;
    line-height: 1rem;
    color: rgb(180, 180, 180);
  }

  strong {
    color: var(--PrimaryCopy);
    font-weight: 500;
  }

  .details {
    transition: 0.3s ease-in-out;
  }
`;

function Cards(props) {
  return (
    <Card>
      <a href={props.url} target="blank" className={props.className}>
        <img
          src={props.img}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
        <div className="details">
          <strong>{props.alt}</strong>
          <span>{props.detail}</span>
        </div>
      </a>
    </Card>
  );
}

export default Cards;
