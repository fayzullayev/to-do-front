import { ButtonGroup, ToDoChangeContainer, ToDoChangeInput } from './style.ts';
import Modal from '../modal';
import Button from '../button';

type ToDoChangeProps = {
  value: string;
  onOk: () => void;
  onCancel: () => void;
  isOpen: boolean;
};

function ToDoChange({ value, onOk, isOpen, onCancel }: ToDoChangeProps) {
  function handleToggleCheckbox() {
    console.log(2345678);
  }

  console.log('isOpen', isOpen);
  return (
    isOpen && (
      <Modal>
        <ToDoChangeContainer>
          {/*<ToDoChangeInput type="text" value={value} />*/}
          <ButtonGroup>
            <Button onClick={handleToggleCheckbox}>Cancel1</Button>
            <Button onClick={onOk}>Ok</Button>
          </ButtonGroup>
        </ToDoChangeContainer>
      </Modal>
    )
  );
}

export default ToDoChange;
