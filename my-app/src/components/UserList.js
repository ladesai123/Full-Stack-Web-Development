import React from 'react';
import User from './User';

class UserList extends React.Component {
  render() {
    const { users } = this.props;
    
    return (
      <div style={{ marginTop: '60px' }}>
        <h2>Student List</h2>
        {users.map((user, index) => (
          <User 
            key={index}
            name={user.name}
            email={user.email}
            hobbies={user.hobbies}
          />
        ))}
      </div>
    );
  }
}

export default UserList;