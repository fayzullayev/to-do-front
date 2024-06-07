import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Line,
  ToDoItemActions,
  ToDoItemContainer,
  ToDoItemTitle,
} from './style.ts';
import { Todo } from '../../types/types.ts';
import { changeTodo, deleteTodo } from '../../api/to-do.ts';
import ToDoChange from '../to-do-change';
import { useTodo } from '../../store/to-do-context.tsx';

type ToDoItemProps = {
  order: number;
} & Todo;

function ToDoItem({ title, isDone, id, order }: ToDoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(isDone);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(title);

  const { onGetTodos } = useTodo();

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
    setIsEditing(false);
  }

  function handleToggleEditing() {
    handleOpenModal();
  }

  function handleToggleDeleteClose() {
    setIsDeleting(false);
  }

  function handleToggleDeleteOpen() {
    setIsDeleting(true);
  }

  async function handleTitleChange(title: string | number) {
    try {
      const data = await changeTodo(id, { title });
      if (data.code === 0) {
        toast.success(data.message);
        setIsEditing(false);
        setTodoTitle(title.toString());
      } else {
        toast.error(data.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  async function handleTodoDelete(_: string | number) {
    try {
      const data = await deleteTodo(+id);
      if (data.code === 0) {
        toast.success(data.message);
        handleToggleDeleteClose();
        await onGetTodos!();
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

      <ToDoChange
        isOpen={isDeleting}
        onOk={handleTodoDelete}
        onCancel={handleToggleDeleteClose}
        value={todoTitle}
        isDeleteComponent={true}
      />

      <ToDoItemTitle>
        <span>{order + 1}.</span>
        <span className={'title'}>{' ' + todoTitle}</span>
        <Line $isChecked={isChecked} />
      </ToDoItemTitle>

      <ToDoItemActions $isChecked={isChecked}>
        <i className="fas fa-check check" onClick={handleToggleCheck}></i>
        <i className="fas fa-pen edit" onClick={handleToggleEditing}></i>
        <i className="fas fa-trash delete" onClick={handleToggleDeleteOpen}></i>
      </ToDoItemActions>
    </ToDoItemContainer>
  );
}

export default ToDoItem;
