import { createGlobalStyle } from "styled-components";

const lightTheme = {
  background: "#fff",
  text: "#000",
  primary: "#6324C6",
  secondary: "#FFB800",
  cardBackground: "#fff",
  cardText: "#000",
  borderColor: "#ccc",
  errorText: "#ff4d4f",
  errorBackground: "#fff2f0",
  loaderBackground: "rgba(0, 0, 0, 0.6)",
  loaderColor: "#6324C6",
};

const darkTheme = {
  background: "#121212",
  text: "#fff",
  primary: "#774DC5",
  secondary: "#FFB800",
  cardBackground: "#333",
  cardText: "#fff",
  borderColor: "#444",
  errorText: "#ff4d4f",
  errorBackground: "#3f3f3f",
  loaderBackground: "rgba(0, 0, 0, 0.8)",
  loaderColor: "#FFB800",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Mulish', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;

export { lightTheme, darkTheme, GlobalStyle };
