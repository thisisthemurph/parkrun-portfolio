import React, { Component } from 'react';
import './Error.scss';

class Error extends Component {
  render() {
    return (
      <div className='Error'>
        <strong>Uh oh</strong>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Error;
