import { ToDoContainer } from './style.ts';
import ToDoHeader from '../to-do-header';
import ToDoList from '../to-do-list';
import ToDoCreateForm from '../to-do-create-form';

function ToDo() {
  return (
    <ToDoContainer>
      <ToDoHeader />
      <ToDoList />
      <ToDoCreateForm />
    </ToDoContainer>
  );
}

export default ToDo;
