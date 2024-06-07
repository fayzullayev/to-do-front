import { useEffect, useRef } from 'react';
import Modal from '../modal';
import Button from '../button';
import { ButtonGroup, ToDoChangeContainer, ToDoChangeInput } from './style.ts';

type ToDoChangeProps = {
  value: string;
  onOk: (title: string) => void;
  onCancel: () => void;
  isOpen: boolean;
};

function ToDoChange({ value, onOk, isOpen, onCancel }: ToDoChangeProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = value;
    }
  }, [isOpen]);

  function handleSubmit() {
    onOk(inputRef.current!.value);
  }

  return (
    isOpen && (
      <Modal onCancel={onCancel}>
        <ToDoChangeContainer>
          <form onSubmit={handleSubmit}>
            <ToDoChangeInput ref={inputRef} type="text" />
          </form>
          <ButtonGroup>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={handleSubmit}>Ok</Button>
          </ButtonGroup>
        </ToDoChangeContainer>
      </Modal>
    )
  );
}

export default ToDoChange;
