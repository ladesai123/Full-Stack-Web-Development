# Exercise 4: Child to Parent Communication in React

## Overview
This experiment demonstrates **child-to-parent communication** in React using **class components**. The application is a simple todo list where users can add, toggle, and delete tasks.

## 🎯 Learning Objectives
- Understand child-to-parent communication in React
- Learn how to use callback functions to pass data from child to parent
- Practice React class component concepts
- Implement state management in class components
- Handle form submission and user input

## 🏗️ Component Architecture

```
App
└── TodoList (Parent Component)
    └── AddTodo (Child Component)
```

### Components Breakdown

#### 1. **TodoList Component (Parent)**
- **Purpose**: Manages the overall state of the todo list
- **State**: Contains an array of todo items
- **Responsibilities**:
  - Stores and manages all todo items
  - Provides callback functions to child components
  - Renders the list of todos
  - Handles todo operations (add, toggle, delete)

#### 2. **AddTodo Component (Child)**
- **Purpose**: Handles user input for creating new todos
- **State**: Contains the current input value
- **Responsibilities**:
  - Manages form input state
  - Validates user input
  - Communicates with parent via callback function
  - Clears input after successful submission

## 🔄 Child-to-Parent Communication Flow

1. **Parent (TodoList)** defines a callback function `addTodo`
2. **Parent** passes this callback to **Child (AddTodo)** as a prop: `<AddTodo onAdd={this.addTodo} />`
3. **Child** receives the callback function via `this.props.onAdd`
4. When user submits a new todo, **Child** calls the callback: `this.props.onAdd(inputValue)`
5. **Parent's** callback function executes and updates the parent's state
6. **Parent** re-renders with the new todo item

## 🛠️ Key React Concepts Demonstrated

### 1. **Callback Functions**
```javascript
// Parent component
addTodo = (todoText) => {
  const newTodo = { id: Date.now(), text: todoText, completed: false };
  this.setState(prevState => ({
    todos: [...prevState.todos, newTodo]
  }));
};

// Passing to child
<AddTodo onAdd={this.addTodo} />
```

### 2. **State Lifting**
- State is managed at the parent level (TodoList)
- Child components remain stateless for shared data
- Parent component is the "single source of truth"

### 3. **Class Component State Management**
```javascript
// State initialization
constructor(props) {
  super(props);
  this.state = { todos: [] };
}

// State updates
this.setState(prevState => ({
  todos: [...prevState.todos, newTodo]
}));
```

### 4. **Controlled Components**
```javascript
// Input is controlled by component state
<input
  value={this.state.inputValue}
  onChange={this.handleInputChange}
/>
```

## 🎨 Features

- ✅ Add new todo items
- ✅ Mark todos as completed (click on text)
- ✅ Delete todo items
- ✅ Empty state message
- ✅ Responsive design
- ✅ Clean, modern UI

## 🚀 How to Run

1. Navigate to the experiment directory:
   ```bash
   cd "Experiment 4 To do child to parent class communication"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## 📝 Usage Instructions

1. **Adding a Todo**: Type in the input field and click "Add" or press Enter
2. **Completing a Todo**: Click on the todo text to toggle its completed status
3. **Deleting a Todo**: Click the "Delete" button next to any todo item

## 🔍 Code Structure

```
src/
├── components/
│   ├── TodoList.js      # Parent component (manages state)
│   └── AddTodo.js       # Child component (handles input)
├── App.js               # Root component
├── index.js             # Entry point
└── index.css            # Styling
```

## 💡 Alternative Communication Methods

While this example uses **callback functions**, React offers other ways to achieve child-to-parent communication:

1. **Context API** - For complex state sharing across multiple components
2. **Custom Hooks** - For reusable stateful logic
3. **State Management Libraries** - Redux, Zustand, etc. for large applications

## 🎓 Educational Value

This exercise teaches fundamental React concepts that are essential for building interactive applications:

- **Unidirectional Data Flow**: Data flows down, events flow up
- **Component Communication**: How components interact with each other
- **State Management**: Where and how to manage application state
- **Event Handling**: Processing user interactions
- **Form Handling**: Managing user input in React

## 🔗 Related Concepts

- **Props vs State**: Understanding when to use each
- **Lifting State Up**: Moving state to common ancestors
- **Component Lifecycle**: Class component lifecycle methods
- **Event Handling**: Synthetic events in React