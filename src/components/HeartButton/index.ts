import styled from "styled-components";

export const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;