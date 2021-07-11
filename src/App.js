import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    src: undefined,
  }

  handleClick = ({ currentTarget }) => {
    this.setState({ src: currentTarget.src })
  }

  render() {
    const { src } = this.state

    return (
      <div id='container'>
        <div id='app'>
          <img src={src} id='selected' />
          <div>
            <img
              onClick={this.handleClick}
              src='https://source.unsplash.com/WLUHO9A_xik/1600x900'
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
