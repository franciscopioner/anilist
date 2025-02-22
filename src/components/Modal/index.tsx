import { ModalOverlay, ModalContent, CloseButton, ModalIcon } from "./styles";
import { FaTimes, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { useTheme } from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  variant: "error" | "warning" | "success";
}

const Modal: React.FC<ModalProps> = ({ children, onClose, variant }) => {
  const theme = useTheme();
  const iconMap: { [key in ModalProps['variant']]: React.ReactNode } = {
    error: <FaExclamationTriangle color={theme.errorText} />,
    warning: <FaExclamationTriangle color={theme.secondary} />,
    success: <FaCheckCircle color={theme.primary} />,
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes color={theme.text} />
        </CloseButton>
        <ModalIcon>{iconMap[variant]}</ModalIcon>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
