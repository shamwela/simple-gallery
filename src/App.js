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
            {[1, 2, 3].map((image) => (
              <img
                onClick={this.handleClick}
                src={`./images/${image}.jpg`}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
