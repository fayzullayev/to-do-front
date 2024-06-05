import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Todo } from '../types/types.ts';
import { getTodos } from '../api/to-do.ts';
import { toast, ToastContainer } from 'react-toastify';

interface TodoContextType {
  todos: Todo[];
  onGetTodos?: () => Promise<void>;
  deleteTodo?: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | null>({
  todos: [],
});

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodo] = useState<Todo[]>([]);

  async function handleGetTodos() {
    try {
      const data = await getTodos();
      if (data.code === 0) {
        setTodo(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (err: any) {
      toast.error(err.message + 7);
    }
  }

  useEffect(() => {
    (async () => {
      await handleGetTodos();
    })();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, onGetTodos: handleGetTodos, deleteTodo: handleGetTodos }}
    >
      <ToastContainer />
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo(): TodoContextType {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  return context;
}
