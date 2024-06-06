import { ToDoListContainer } from './style.ts';
import { useTodo } from '../../store/to-do-context.tsx';
import ToDoItem from '../to-do-item';

function ToDoList() {
  const { todos } = useTodo();

  return (
    <ToDoListContainer>
      {todos.map((todo, index) => (
        <ToDoItem key={todo.id} {...todo} order={index} />
      ))}
    </ToDoListContainer>
  );
}

export default ToDoList;
