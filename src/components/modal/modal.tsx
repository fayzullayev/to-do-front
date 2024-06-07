import { ModalContainer, ModalContent } from './style.ts';
import { ReactNode, useRef, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  onCancel: () => void;
};

function Modal({ children, onCancel }: ModalProps) {
  const content = useRef<HTMLDivElement>(null);

  function handleCloseModal(e: MouseEvent<HTMLDivElement>) {
    if (e.target === content.current) {
      onCancel();
    }
  }

  return createPortal(
    <ModalContainer onClick={handleCloseModal} ref={content}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>,
    document.getElementById('modal')!,
  );
}

export default Modal;
