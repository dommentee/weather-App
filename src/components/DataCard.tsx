import * as  React from 'react'
import Weathersvg, { WeatherIconType } from './Weathersvg';

interface Iprops {
  icon: WeatherIconType
  temperatureMax: number
  time: number
}

export function DataCard(props: Iprops) {
  const timeInMs = props.time;
  const date = new Date(parseInt(`${timeInMs}000`))
  const dayOfWeek = [
    'SUN','MON','TUE','WED','THU','FRI','SAT',
  ] 
  const theDay = dayOfWeek[date.getDay()];
  console.log(theDay);
  return (
    <div className="day">
      <span>{theDay}</span>
      <div className="icon">
        <Weathersvg
          icon={props.icon}
          size={40}
          color={'white'}  
          animate={false}
          />
      </div>
      <div className="the-temp">
        {props.temperatureMax}
      </div>
    </div>
  )
  
}
