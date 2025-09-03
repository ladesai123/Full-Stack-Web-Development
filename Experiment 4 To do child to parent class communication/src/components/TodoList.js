import React from 'react';
import AddTodo from './AddTodo';

/**
 * TodoList Component (Parent Component)
 * 
 * This is the parent component that manages the state of the todo list.
 * It demonstrates child-to-parent communication by passing a callback
 * function (addTodo) to the child component (AddTodo).
 * 
 * Key Concepts Demonstrated:
 * - Class component state management
 * - Callback functions for child-to-parent communication
 * - State lifting (state is managed at the parent level)
 */
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    
    // Initialize state with an empty array of todos
    this.state = {
      todos: []
    };
  }

  /**
   * Callback function passed to child component
   * This function will be called by the AddTodo component
   * when a new todo is submitted
   * 
   * @param {string} todoText - The text of the new todo item
   */
  addTodo = (todoText) => {
    // Create a new todo object
    const newTodo = {
      id: Date.now(), // Simple ID generation
      text: todoText,
      completed: false
    };

    // Update state by adding the new todo to the existing array
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  /**
   * Toggle the completed status of a todo item
   * @param {number} id - The ID of the todo to toggle
   */
  toggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  /**
   * Delete a todo item from the list
   * @param {number} id - The ID of the todo to delete
   */
  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        
        {/* 
          Pass the addTodo callback function to the child component
          This enables child-to-parent communication
        */}
        <AddTodo onAdd={this.addTodo} />
        
        {/* Conditional rendering based on todos array length */}
        {todos.length === 0 ? (
          <p className="empty-state">No tasks yet. Add a task to get started!</p>
        ) : (
          <ul className="todo-list">
            {todos.map(todo => (
              <li 
                key={todo.id} 
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <span 
                  onClick={() => this.toggleTodo(todo.id)}
                  className="todo-text"
                >
                  {todo.text}
                </span>
                <button 
                  onClick={() => this.deleteTodo(todo.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TodoList;