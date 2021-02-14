import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const { lang, children } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderStyle: 'solid',
        }}
      >
        <div>Lang is : {lang}</div>
        <div>Children is: {children}</div>
      </div>
    );
  }
}

export { Greetings };
