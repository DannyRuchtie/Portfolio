import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;

  a{
    text-decoration:none;
  }



  .showcase:hover > img {
    transform: scale(1.05);
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
        
      <a href={props.url}  className={props.class} >

        <img
          src={props.img}
          alt={props.alt}
          width={props.width}
          height={props.height}

          loading="lazy"
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
