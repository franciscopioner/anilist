import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  background-color: ${({ $active, theme }) => ($active ? theme.primary : "white")};
  color: ${({ $active, theme }) => ($active ? "white" : theme.primary)};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.primary : theme.primary)};
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export const SortButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const SortButton = styled.button<{ $active: boolean }>`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ $active, theme }) => ($active ? theme.primary : "#f0f0f0")};
  color: ${({ $active, theme }) => ($active ? "white" : theme.primary)};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? theme.primary : "#d0d0d0")};
  }
`;