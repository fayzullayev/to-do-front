import { ToDoListContainer } from './style.ts';
import { useTodo } from '../../store/to-do-context.tsx';
import ToDoItem from '../to-do-item';

function ToDoList() {
  const { todos } = useTodo();

  return (
    <ToDoListContainer>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </ToDoListContainer>
  );
}

export default ToDoList;
