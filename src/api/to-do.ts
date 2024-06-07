import { ResponseData, Todo } from '../types/types.ts';
import { api } from './config.ts';

export async function getTodos(): Promise<ResponseData<Todo[]>> {
  const response = await api.get<ResponseData<Todo[]>>('/api/todos');

  return response.data;
}

export async function changeTodo<T>(
  id: number,
  data: T,
): Promise<ResponseData<Todo>> {
  const response = await api.put<ResponseData<Todo>>('/api/todos/' + id, data);

  return response.data;
}

export async function deleteTodo(id: number): Promise<ResponseData<void>> {
  const response = await api.delete<ResponseData<void>>('/api/todos/' + id);

  return response.data;
}

export async function addTodo(title: string): Promise<ResponseData<number>> {
  const response = await api.post<ResponseData<number>>('/api/todos', {
    title,
  });

  return response.data;
}
