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
  isHasError?: boolean;
  isLoading?: boolean;
}

const TodoContext = createContext<TodoContextType | null>({
  todos: [],
});

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [isHasError, setIsHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await handleGetTodos();
    })();
  }, []);

  async function handleGetTodos() {
    setIsLoading(true);

    try {
      const data = await getTodos();
      if (data.code === 0) {
        setTodo(data.data);
        setIsHasError(false);
      } else {
        toast.error(data.message);
        setIsHasError(true);
      }
    } catch (err: any) {
      toast.error(err.message);
      setIsHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        onGetTodos: handleGetTodos,
        deleteTodo: handleGetTodos,
        isHasError,
        isLoading,
      }}
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
