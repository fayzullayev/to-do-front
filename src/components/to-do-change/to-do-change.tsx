import { ToDoChangeContainer, ToDoChangeInput } from './style.ts';
import Modal from '../modal';

type ToDoChangeProps = {
  value: string;
};

function ToDoChange({ value }: ToDoChangeProps) {
  return (
    <Modal>
      <ToDoChangeContainer>
        <ToDoChangeInput type="text" value={value} />
      </ToDoChangeContainer>
    </Modal>
  );
}

export default ToDoChange;
