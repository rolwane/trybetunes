import React, { Component } from 'react';
import './styles.css';

class Loading extends Component {
  render() {
    // const { color } = this.props;

    return <p className="loading" style={ { color: 'red' } }>Carregando...</p>;
  }
}

export default Loading;
