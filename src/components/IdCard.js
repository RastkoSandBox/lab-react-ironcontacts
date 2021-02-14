import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    console.log(birth);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderStyle: 'solid',
        }}
      >
        <div>Lastname is : {lastName}</div>
        <div>Firstname is: {firstName}</div>
        <div>Gender is : {gender}</div>
        <div>height is: {height}</div>
        <div>birth is: {birth.toDateString()}</div>
        <div>picture is: {picture}</div>

      </div>
    );
  }
}

export { IdCard };
