import { ToDoContainer } from './style.ts';
import ToDoHeader from '../to-do-header';
import ToDoList from '../to-do-list';
import ToDoCreateForm from '../to-do-create-form';
import Loader from '../loader';
import { useTodo } from '../../store/to-do-context.tsx';
import Error from '../error';

function ToDo() {
  const { isHasError, isLoading } = useTodo();
  return (
    <ToDoContainer>
      <ToDoHeader />
      {isLoading ? (
        <Loader />
      ) : isHasError && !isLoading ? (
        <Error />
      ) : (
        <ToDoList />
      )}
      <ToDoCreateForm />
    </ToDoContainer>
  );
}

export default ToDo;
