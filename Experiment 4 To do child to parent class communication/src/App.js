import React from 'react';
import TodoList from './components/TodoList';

/**
 * Main App Component
 * 
 * This is the root component that renders the TodoList component.
 * The entire application demonstrates child-to-parent communication
 * between TodoList (parent) and AddTodo (child) components.
 */
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;