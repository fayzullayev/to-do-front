import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Line,
  ToDoItemActions,
  ToDoItemContainer,
  ToDoItemTitle,
} from './style.ts';
import { Todo } from '../../types/types.ts';
import { changeTodo } from '../../api/to-do.ts';
import ToDoChange from '../to-do-change';

type ToDoItemProps = {
  order: number;
} & Todo;

function ToDoItem({ title, isDone, id, order }: ToDoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(isDone);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(title);

  async function handleToggleCheck() {
    try {
      const data = await changeTodo(id, { isDone: !isChecked });
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

  function handleOpenModal() {
    setIsEditing(true);
  }

  function handleCloseModal() {
    console.log(12345678);
    setIsEditing(false);
  }

  function handleToggleEditing() {
    handleOpenModal();
  }

  async function handleTitleChange(title: string) {
    try {
      const data = await changeTodo(id, { title });
      if (data.code === 0) {
        toast.success(data.message);
        setIsEditing(false);
        setTodoTitle(title);
      } else {
        toast.error(data.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <ToDoItemContainer>
      <ToDoChange
        isOpen={isEditing}
        value={todoTitle}
        onOk={handleTitleChange}
        onCancel={handleCloseModal}
      />

      <ToDoItemTitle>
        <span>{order + 1}.</span>
        <span className={'title'}>{' ' + todoTitle}</span>
        <Line $isChecked={isChecked} />
      </ToDoItemTitle>

      <ToDoItemActions $isChecked={isChecked}>
        <i className="fas fa-check check" onClick={handleToggleCheck}></i>
        <i className="fas fa-pen edit" onClick={handleToggleEditing}></i>
        <i className="fas fa-trash delete"></i>
      </ToDoItemActions>
    </ToDoItemContainer>
  );
}

export default ToDoItem;
