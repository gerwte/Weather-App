import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [
        {
          id: 1,
          name: 'Moscow',
        },
        {
          id: 2,
          name: 'Paris'
        },
        {
          id: 3,
          name: 'London'
        },
        {
          id: 4,
          name: 'New York'
        },
        {
          id: 5,
          name: 'Madrid',
        },
        {
          id: 6,
          name: 'Tokyo'
        }
      ],
      weatherOptions: [
        {
          id: 7,
          name: 'sunny'
        },
        {
          id: 8,
          name: 'overcast'
        },
        {
          id: 9,
          name: 'rain'
        },
        {
          id: 10,
          name: 'snow'
        }
      ]
    }
  }


  render() {
    return (
      <div className='container'>
        <h1 className='title'>The Weather</h1>
        <div className='city-choose'>
          <select>
            {this.state.cities.map(el => (
              <option>{el.name}</option>
            ))}
          </select>
          <button className='start-button'>Show</button>
        </div>
      </div>
    )
  }
}

export default App