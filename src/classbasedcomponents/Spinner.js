import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='loading' id='spinn'><img src={loading} alt='loading'
      /></div>
    )
  }
}

export default Spinner