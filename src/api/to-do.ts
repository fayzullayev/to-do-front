import { ResponseData, Todo } from '../types/types.ts';
import { api } from './config.ts';

export async function getTodos(): Promise<ResponseData<Todo[]>> {
  const response = await api.get<ResponseData<Todo[]>>('/api/todos');

  return response.data;
}

export async function changeTodo<T>(
  id: number,
  data: T,
): Promise<ResponseData<Todo[]>> {
  const response = await api.put<ResponseData<Todo[]>>(
    '/api/todos/' + id,
    data,
  );

  return response.data;
}
