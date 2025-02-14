import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#6324C6" : "white")};
  color: ${({ active }) => (active ? "white" : "#6324C6")};
  border: 1px solid ${({ active }) => (active ? "#6324C6" : "#6324C6")};
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6324C6;
    color: white;
  }
`;
