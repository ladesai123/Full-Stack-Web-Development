import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      hobbies: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, hobbies } = this.state;
    const hobbiesArray = hobbies.split(',').map(hobby => hobby.trim());
    
    this.props.addUser({
      name,
      email,
      hobbies: hobbiesArray
    });

    this.setState({
      name: '',
      email: '',
      hobbies: ''
    });
  };

  render() {
    return (
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2>Add New Student</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Hobbies (comma separated):</label>
            <input
              type="text"
              name="hobbies"
              value={this.state.hobbies}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <button type="submit" style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Add Student
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;