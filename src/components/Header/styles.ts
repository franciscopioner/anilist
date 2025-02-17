import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  font-weight: bold;
  font-size: 40px;
  font-weight: 400;
  position: relative;
`;

export const Highlight = styled.span`
  color: #FFB800;
`;
