import React from 'react';
import HobbyList from './HobbyList';

class User extends React.Component {
  render() {
    const { name, email, hobbies } = this.props;
    
    return (
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>
          {name} <small>({email})</small>
        </h3>
        <HobbyList hobbies={hobbies} />
      </div>
    );
  }
}

export default User;