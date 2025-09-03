import React from 'react';

/**
 * AddTodo Component (Child Component)
 * 
 * This is the child component that handles user input for adding new todos.
 * It demonstrates child-to-parent communication by calling a callback function
 * passed down from the parent component (TodoList).
 * 
 * Key Concepts Demonstrated:
 * - Class component with controlled input
 * - Form handling in class components
 * - Child-to-parent communication via callback functions
 * - Event handling and state management
 */
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    
    // Initialize state for the input field
    this.state = {
      inputValue: ''
    };
  }

  /**
   * Handle input change events
   * Updates the component's local state when user types
   * 
   * @param {Event} event - The input change event
   */
  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  /**
   * Handle form submission
   * Validates input and calls the parent's callback function
   * 
   * @param {Event} event - The form submit event
   */
  handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    
    const { inputValue } = this.state;
    
    // Validate input - don't add empty todos
    if (inputValue.trim() === '') {
      return;
    }

    // Call the parent's callback function (child-to-parent communication)
    // This is where the communication happens!
    this.props.onAdd(inputValue.trim());

    // Clear the input field after successful submission
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="add-todo-form">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={this.handleInputChange}
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default AddTodo;