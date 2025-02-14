import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./styles";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => window.location.reload()}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
