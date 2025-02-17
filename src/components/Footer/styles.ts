import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 1rem;
  bottom: 0;
  left: 0;
  font-size: 24px;
  font-weight: 400;
`;

export const Highlight = styled.span`
  color: #FFB800;
`;

export const RightsReserved = styled.span`
  font-size: 10px;
  display: block;
`;