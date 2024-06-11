import { ToDoListContainer, ToDoListFooter, ToDoListWrapper } from './style.ts';
import { useTodo } from '../../store/to-do-context.tsx';
import ToDoItem from '../to-do-item';
import Pagination from '../pagination';

function ToDoList() {
  const { todos } = useTodo();

  function handlePageChange(page: number) {
    console.log('page', page);
  }

  return (
    <ToDoListContainer>
      <ToDoListWrapper>
        {todos.map((todo, index) => (
          <ToDoItem key={todo.id} {...todo} order={index} />
        ))}
      </ToDoListWrapper>

      <ToDoListFooter>
        <Pagination pages={10} current={1} onPageChange={handlePageChange} />
      </ToDoListFooter>
    </ToDoListContainer>
  );
}

export default ToDoList;
