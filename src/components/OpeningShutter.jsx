import React from "react";
import styled, { keyframes } from "styled-components";

const byeShutter = keyframes`
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
`

const shutterOpen = keyframes`
  0% {
    width: 0;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  90% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
`

export const OpeningShutter = () => {
  return (
    <SShutter></SShutter>
  );
};

const SShutter = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#1e1e1e;
  z-index:9999;
  animation: ${byeShutter} 2.6s forwards;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: #e6e6fa;
    width: 0;
    height: 1px;
    animation: ${shutterOpen} 3.0s forwards;
  }
`;