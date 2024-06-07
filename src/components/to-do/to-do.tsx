import { ToDoContainer } from './style.ts';
import ToDoHeader from '../to-do-header';
import ToDoList from '../to-do-list';
import ToDoCreateForm from '../to-do-create-form';
import Loader from '../loader';
import { useTodo } from '../../store/to-do-context.tsx';
import Error from '../error';
import NoData from '../no-data';

function ToDo() {
  const { isHasError, isLoading, todos } = useTodo();
  return (
    <ToDoContainer>
      <ToDoHeader />
      <ToDoCreateForm />
      {todos.length === 0 && !isLoading && !isHasError && <NoData />}

      {isLoading ? (
        <Loader />
      ) : isHasError && !isLoading ? (
        <Error />
      ) : (
        <ToDoList />
      )}
    </ToDoContainer>
  );
}

export default ToDo;
