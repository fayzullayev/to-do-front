import {
  ToDoCreateFormButton,
  ToDoCreateFormContainer,
  ToDoCreateFormInput,
  ToDoCreateFormInputContainer,
} from './style.ts';
import { addTodo } from '../../api/to-do.ts';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useTodo } from '../../store/to-do-context.tsx';

function ToDoCreateForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onGetTodos } = useTodo();

  async function handleAddTask() {
    if (inputRef.current!.value.length > 0) {
      try {
        const data = await addTodo(inputRef.current!.value);

        if (data.code === 0) {
          toast.success(data.message);
          await onGetTodos!();
          inputRef.current!.value = '';
        } else {
          toast.error(data.message);
        }
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  }

  return (
    <ToDoCreateFormContainer>
      <h2>New Todo</h2>
      <ToDoCreateFormInputContainer>
        <ToDoCreateFormInput ref={inputRef} type="text" />
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await handleAddTask();
          }}
        >
          <ToDoCreateFormButton type="submit">Add task</ToDoCreateFormButton>
        </form>
      </ToDoCreateFormInputContainer>
    </ToDoCreateFormContainer>
  );
}

export default ToDoCreateForm;
