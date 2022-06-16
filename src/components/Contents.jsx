import React from "react";
import styled from "styled-components";

export const Contents = (props) => {
  return(
    <SItem>
      <SAlink target="_blank" href={props.link} />
      <SImg src={props.image}></SImg>
      <SDiscription>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.text}</p>
      </SDiscription>
    </SItem>
  );
};

const SImg = styled.img`
  width: 150px;
`;

const SItem = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  align-items: center;
  border: solid indigo;
  border-radius: 10px;
  &:hover {
    background-color: silver;
  }
`;

const SAlink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
`;

const SDiscription = styled.div`
  width: 600px;
  padding: 0 10px 0 20px;
`;

