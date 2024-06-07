import { useEffect, useRef } from 'react';
import Modal from '../modal';
import Button from '../button';
import { ButtonGroup, ToDoChangeContainer, ToDoChangeInput } from './style.ts';

type ToDoChangeProps = {
  value: string | number;
  onOk: (title: string | number) => void;
  onCancel: () => void;
  isOpen: boolean;
  isDeleteComponent?: boolean;
};

function ToDoChange({
  value,
  onOk,
  isOpen,
  onCancel,
  isDeleteComponent = false,
}: ToDoChangeProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      isDeleteComponent
        ? (inputRef.current.disabled = true)
        : inputRef.current.focus();

      inputRef.current.value = value.toString();
    }
  }, [isOpen]);

  function handleSubmit() {
    onOk(inputRef.current!.value);
  }

  return (
    isOpen && (
      <Modal onCancel={onCancel}>
        <ToDoChangeContainer>
          {isDeleteComponent && <h2>Are you sure delete this task?</h2>}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
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
