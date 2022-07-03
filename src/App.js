import React, { Component } from 'react'
import Weather from './Weather'
import axios from 'axios'


export class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
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
      currentCity: {
        name: ''
      },
      weather: '',
      temperature: '',
      localTime: '',
      imageUrl: ''
    }
  }

  showWeatherOnHandler = () => {

    let currentCity = {
      name: this.myRef.current.value,
    }
    this.setState({ currentCity })
    axios.get('http://api.weatherapi.com/v1/current.json?key=9a69f0bee3cf451a840191227221506&q=' + this.myRef.current.value + '&aqi=no')
      .then(response => {
        console.log(response.data)
        const weather = {
          temperature: response.data.current.temp_c,
          weather: response.data.current.condition.text,
          imageUrl: response.data.current.condition.icon
        }
        const timeLocal = {
          localTime: response.data.location.localtime.substring(11)
        }
        this.setState(weather)
        this.setState(timeLocal)
      }).catch(error => { console.log(error) })
  }

  testHandler = () => {
    console.log(this.state.localTime)
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <h1 className='title'>The Weather</h1>
          <div className='city-choose'>
            <select ref={this.myRef}>
              {this.state.cities.map(el => (
                <option key={this.state.cities.id} value={this.state.cities.name}>{el.name}</option>
              ))}
            </select>
            <button className='start-button' onClick={this.showWeatherOnHandler}>Show</button>
          </div>
        </div>
        {this.state.currentCity.name && <Weather value={this.state.currentCity.name} temperature={this.state.temperature} weather={this.state.weather} image={this.state.imageUrl} time={this.state.localTime} />}
      </div>
    )
  }
}

export default App