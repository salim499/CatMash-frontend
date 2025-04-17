import styled from "styled-components";

export const ButtonContainerS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`;

export const ButtonContentS = styled.button`
  padding: 20px 30px;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  border: 2px solid white;
  border-radius: 50%;
  color: white;
  background-color: rgba(47, 85, 150, 1);

  &:hover {
    cursor: pointer;
    background-color: rgba(226, 81, 77, 1);
  }

  &:active {
    padding: 15px 25px;
    border-radius: 50%;
  }
`;
