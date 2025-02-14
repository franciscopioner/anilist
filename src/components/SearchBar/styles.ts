import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px; 
  margin-bottom: 20px;
  gap: 10px;
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  max-width: 915px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  width: 86px;
  height: 38px;
  background-color: #6324C6;
  color: white;
  border: none;
  border-color: #C4CAD4;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;