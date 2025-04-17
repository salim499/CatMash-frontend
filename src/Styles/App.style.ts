import styled from "styled-components";

export const DivContainerS = styled.div`
  min-height: calc(100vh - 20px);
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-height: calc(100vh - 2px);
    margin-right: 2px;
    margin-left: 2px;
    margin-bottom: 2px;
  }
`;
