import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    src: './images/1.jpg',
  }

  handleClick = ({ currentTarget }) => {
    this.setState({ src: currentTarget.src })
  }

  render() {
    const { src } = this.state

    return (
      <div id='container'>
        <div id='app'>
          <img src={src} id='display-image' alt='Displayed car' />
          <div id='gallery'>
            {[1, 2, 3, 4].map((image) => (
              <img
                onClick={this.handleClick}
                src={`./images/${image}.jpg`}
                key={image}
                alt='A car'
                className='images'
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
