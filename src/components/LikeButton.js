import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    counter: 0,
    name: 'Rastko'
  };

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
    this.setState({ name: 'Rale' })
  };

  render() {
    // console.log(this.state)
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    const { counter } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          style={{
            width: '100px',
            height: '20px',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
          onClick={() => this.handleClick()}
        >
          {counter} Like {this.props.prezime}
        </button>
      </div>
    );
  }
}

export { LikeButton };
