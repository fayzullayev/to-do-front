// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TodoProvider } from './store/to-do-context.tsx';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <TodoProvider>
    <App />
  </TodoProvider>,
  // </React.StrictMode>,
);
