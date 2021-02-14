import React, { Component } from 'react';
import axios from 'axios';

class Countries extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      // console.log('response is ', response.data);
      this.setState({ countries: response.data })
    });
  }

  showcountries = this.state.countries.map(c => {
    return <div>{c.name}</div>
  })


  render() {

    console.log('Ovo su drzave', this.state.countries)
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        countries: {this.countries && this.showcountries}
      </div>
    );
  }
}

export { Countries };
