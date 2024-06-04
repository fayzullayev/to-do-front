export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

export interface ResponseData<T> {
  message: string;
  code: number;
  data: T;
}
