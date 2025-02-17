import Footer from "@components/Footer";
import Header from "@components/Header";
import { Container, LayoutWrapper } from "./styles";

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </LayoutWrapper>
  );
};

export default Template;
