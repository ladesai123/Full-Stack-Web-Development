import React from 'react';

class HobbyList extends React.Component {
  render() {
    const { hobbies } = this.props;
    
    return (
      <div>
        <h4>Hobbies:</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>- {hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HobbyList;