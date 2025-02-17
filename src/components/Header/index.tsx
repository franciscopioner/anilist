import Toggle from "@components/Toggle";
import { HeaderContainer, Highlight } from "./styles";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer>
      BUSC<Highlight>ANIME</Highlight>
      <Toggle action={toggleTheme} value={isDarkMode} values={{ off: "Light", on: "Dark" }} />
    </HeaderContainer>
  );
};

export default Header;
