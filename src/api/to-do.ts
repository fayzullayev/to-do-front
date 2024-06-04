import { ResponseData, Todo } from '../types/types.ts';
import { api } from './config.ts';

export async function getTodos(): Promise<ResponseData<Todo[]>> {
  const response = await api.get<ResponseData<Todo[]>>('/api/todos');

  return response.data;
}
