import Footer from "@components/Footer";
import Header from "@components/Header";
import { Container, LayoutWrapper } from "./styles";

interface TemplateProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Template: React.FC<TemplateProps> = ({ children, toggleTheme, isDarkMode }) => {
  return (
    <LayoutWrapper>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Container>{children}</Container>
      <Footer />
    </LayoutWrapper>
  );
};

export default Template;
