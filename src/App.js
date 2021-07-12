import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    selectedSrc: './images/1.jpg',
  }

  handleSelect = ({ currentTarget }) => {
    this.setState({ selectedSrc: currentTarget.src })
  }

  render() {
    const { images, selectedSrc } = this.state

    return (
      <div id='container'>
        <div id='instruction'>Select an image.</div>

        <div id='app'>
          <img
            src={selectedSrc}
            id='selected-image'
            alt='Selected sports car'
          />

          <div id='gallery'>
            {images.map((image) => (
              <img
                key={image}
                src={`./images/${image}`}
                onClick={this.handleSelect}
                className='images'
                alt='A sports car'
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
