import React from 'react'

export default function Weather(props) {
  return (
    <div className='container-weather'>
      <div className='name-weather'>
        <h2 className='city'>{props.value}</h2>
        <div className='show-weather'>
          <img className='weather-image' src={props.image} width='64' height='64' />
          <h2 className='weather'>{props.weather}</h2>
        </div>
      </div>
      <h2 className='temerature'>{props.temperature} С&deg;</h2>
      <div className='forecast'>
        
      </div>
    </div>
  )
}
