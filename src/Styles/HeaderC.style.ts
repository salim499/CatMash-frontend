import styled from "styled-components";

export const DivContainerTitleS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgTitleS = styled.img`
  width: 180px;
  height: 180px;
`;

export const NavS = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LinkS = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(47, 85, 150, 1);

  &:hover {
    color: rgba(226, 81, 77, 1);
  }

  &:active {
    font-size: 1.4rem;
  }
`;
