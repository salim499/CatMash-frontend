import styled from "styled-components";

export const PaginationContainerS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;
  margin-top: 55px;
`;

export const PageButtonS = styled.button<{ disabled?: boolean }>`
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  background-color: ${({ disabled }) =>
    disabled ? "#ddd" : "rgba(47, 85, 150, 1)"};
  color: rgb(255, 255, 255);

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ddd" : "#e0e0e0")};
  }
`;

export const PageInfoS = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
