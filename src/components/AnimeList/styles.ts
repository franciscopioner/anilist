import styled from "styled-components";

export const AnimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto); 
  gap: 20px;
  width: 100%;
  max-width: 1366;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  margin: 10px 0;
`;

export const LoadMoreButton = styled.button`
  width: 100%;
  max-width: 1366px;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  background-color: #FFB800;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #6324C6;
  }
`;
