import React from 'react';
import UserForm from './components/UserForm'
import UserList from './components/UserList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem('students')) || [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          hobbies: ['Reading', 'Traveling', 'Swimming']
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          hobbies: ['Cooking', 'Painting']
        }
      ],
      showForm: false
    };
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };

  addUser = (newUser) => {
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      showForm: false
    }));
  };

  render() {
    return (
      <div className="App" style={{ padding: '20px' }}>
        <button 
          onClick={this.toggleForm}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {this.state.showForm ? 'Cancel' : 'Insert Student'}
        </button>
        
        {this.state.showForm ? (
          <UserForm addUser={this.addUser} />
        ) : (
          <UserList users={this.state.users} />
        )}
      </div>
    );
  }
}

export default App;