import { ToDoItemContainer } from './style.ts';
import { Todo } from '../../types/types.ts';

type ToDoItemProps = {} & Todo;

function ToDoItem({ title, isDone, id }: ToDoItemProps) {
  return (
    <ToDoItemContainer>
      <div>{id}</div>
      <div>{title}</div>
      <div>{isDone}</div>
    </ToDoItemContainer>
  );
}

export default ToDoItem;
