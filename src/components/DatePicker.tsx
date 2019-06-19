import * as React from 'react';
import Weathersvg, { WeatherIconType } from './Weathersvg';
import { array } from 'prop-types';



interface IProps {
  temperature: number
  icon: WeatherIconType
  time: number 
  animate: boolean
}
 
class DatePicker extends React.Component<IProps> {
  
  render() { 
    const findDay = new Date();
    const dayOfWeek = [
      'Sun','Mon','Tue','Wed','Thu','Fri','Sat',
    ] 
    const findDayOfWeek = dayOfWeek[findDay.getDay()];
    console.log(findDayOfWeek);

    return (
      <div className="dates">
        <div className="day">
          <span>{findDayOfWeek}</span>
          <div className="icon">
            <Weathersvg
              icon={this.props.icon}
              size={40}
              color={'white'}  
              animate={false}
            />
          </div>
          <div>
            {this.props.temperature}
          </div>
        </div>
      </div>
    )
  }
}

export default DatePicker;