import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    imageNames: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    selectedSrc: './images/1.jpg',
  }

  handleSelect = ({ currentTarget }) => {
    this.setState({ selectedSrc: currentTarget.src })
  }

  render() {
    const { imageNames, selectedSrc } = this.state

    return (
      <div id='container'>
        <div id='instruction'>Select an image.</div>

        <div id='app'>
          <img
            rel='preload'
            as='image'
            src={selectedSrc}
            id='selected-image'
            alt='Selected sports car'
          />

          <div id='gallery'>
            {imageNames.map((imageName) => (
              <img
                key={imageName}
                src={`./images/${imageName}`}
                onClick={this.handleSelect}
                className={
                  selectedSrc.includes(imageName) ? 'outline images' : 'images'
                }
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
