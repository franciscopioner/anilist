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

