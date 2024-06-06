import { ModalContainer, ModalContent } from './style.ts';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  return createPortal(
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>,
    document.getElementById('modal')!,
  );
}

export default Modal;
