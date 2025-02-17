import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: absolute; 
  right: 20px; 
  top: 50%; 
  transform: translateY(-50%); 
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: white;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Slider = styled.span<{ $checked: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.secondary : theme.primary};
  border-radius: 50px;
  transition: background-color 0.3s ease;
`;

export const Switch = styled.span<{ $checked: boolean }>`
  position: absolute;
  left: ${({ $checked }) => ($checked ? "18px" : "0")};
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
  background-color: ${({ theme, $checked }) =>
  $checked ? theme.primary : theme.secondary};
`;