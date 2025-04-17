import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerS = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(47, 85, 150, 0.2);
  border-top-color: rgba(47, 85, 150, 1);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoaderWrapperS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
