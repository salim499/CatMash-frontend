import styled, { keyframes, css } from "styled-components";
// Import types
import { FigureCatST, ImageCatST } from "../Types/FigureT";
// Import contants
import { left, right } from "../Constants/index";

const backgroundAndZoom = (bg: string) => keyframes`
  0% {
    transform: scale(1);
    background-color: ${bg};
    border : none;
  }
  50% {
    transform: scale(1.01);
    background-color: white;
    border : none;
  }
  100% {
    transform: scale(1);
    background-color: ${bg};
    border : none;
  }rgb(226,81,77)
`;

export const FigureCatS = styled.figure<FigureCatST>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: ${(props) => (props.order ? props.order : "unset")};
  padding: 20px;
  box-shadow: ${(props) =>
    props.page === 1 && props.index === 0
      ? "0 0 10px rgb(255, 215, 0)"
      : props.page === 1 && props.index === 1
      ? "0 0 10px rgb(180, 180, 180)"
      : props.page === 1 && props.index === 2
      ? "0 0 10px rgb(205, 127, 50)"
      : "none"};
  cursor: pointer;
  animation: ${(props) => {
    if (props.page !== 1) return "none";
    let color1 = "white";
    switch (props.index) {
      case 0:
        color1 = "gold";
        break;
      case 1:
        color1 = "silver";
        break;
      case 2:
        color1 = "peru";
        break;
      default:
        return;
    }

    return css`
      ${backgroundAndZoom(color1)} 5s infinite
    `;
  }};
  background: ${(props) =>
    props.page === 1 && props.index === 0
      ? "rgb(255, 215, 0)"
      : props.page === 1 && props.index === 1
      ? "rgb(180, 180, 180)"
      : props.page === 1 && props.index === 2
      ? "rgb(205, 127, 50)"
      : "none"};

  &:hover {
    border-radius: ${(props) => (props.order ? "0%" : "50%")};
    transform: ${(props) =>
      props.rotateDirection && props.rotateDirection === right
        ? "rotate(5deg)"
        : props.rotateDirection && props.rotateDirection === left
        ? "rotate(-5deg)"
        : "none"};
  }

  &:active {
    filter: brightness(50%);
  }
`;

export const ImageCatS = styled.img<ImageCatST>`
  width: ${(props) => (props.width ? props.width : "330px")};
  height: ${(props) => (props.height ? props.height : "330px")};
  border-radius: 50%;
  object-fit: cover;
  filter: brightness(100%);
  margin-top: 25px;

  &:hover {
    filter: brightness(75%);
  }
`;

export const FigcaptionCatS = styled.figcaption`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const FigureSpanCatS = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-top: 25px;
  border: 3px solid rgba(47, 85, 150, 1);
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(47, 85, 150, 1);
`;

export const FigurePodiumSpanCatS = styled.span`
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(47, 85, 150, 1);
  text-align: center;
`;

export const FigcaptionFirstSpanCatS = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(47, 85, 150, 1);
  text-align: center;
`;

export const FigcaptionSecondSpanCatS = styled.span`
  margin-top: 10px;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  color: rgba(47, 85, 150, 1);
`;
