import {
  Line,
  ToDoItemActions,
  ToDoItemContainer,
  ToDoItemTitle,
} from './style.ts';
import { Todo } from '../../types/types.ts';
import { useState } from 'react';
import { checkTodo } from '../../api/to-do.ts';
import { toast } from 'react-toastify';
import Modal from '../modal';

type ToDoItemProps = {
  order: number;
} & Todo;

function ToDoItem({ title, isDone, id, order }: ToDoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(isDone);

  async function handleToggleCheck() {
    try {
      const data = await checkTodo(id, !isChecked);
      if (data.code === 0) {
        toast.success(data.message);
        setIsChecked((prevIsChecked) => !prevIsChecked);
      } else {
        toast.error(data.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <ToDoItemContainer>
      <Modal>Hello</Modal>
      <ToDoItemTitle>
        <span>{order + 1}.</span>
        <span className={'title'}>{' ' + title}</span>
        <Line $isChecked={isChecked} />
      </ToDoItemTitle>
      <ToDoItemActions $isChecked={isChecked}>
        <i className="fas fa-check check" onClick={handleToggleCheck}></i>
        <i className="fas fa-pen edit"></i>
        <i className="fas fa-trash delete"></i>
      </ToDoItemActions>
    </ToDoItemContainer>
  );
}

export default ToDoItem;
