import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
const todos = [
  {text: 'Cortar cebolla', complete: false},
  {text: 'Cortar Tomates', complete: false},
  {text: 'Cortar papas', complete: false},
  {text: 'Cortar Zanahoria', complete: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map((todo, key) => (<TodoItem key={key} text={todo.text} />))
        }
      </TodoList>
      <CreateTodoButton />      
    </React.Fragment>
  );
}

export default App;
