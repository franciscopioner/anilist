import styled from "styled-components";

export const HeartButton = styled.button<{ $isFavorited: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ $isFavorited }) => ($isFavorited ? "red" : "white")};
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const DetailsHeartButton = styled(HeartButton)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 50%;
`;