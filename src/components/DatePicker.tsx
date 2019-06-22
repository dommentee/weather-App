import * as React from 'react';
import Weathersvg, { WeatherIconType, getIconTypeFromApi } from './Weathersvg';
import { DataCard } from './DataCard';



interface IProps {
  temperature: number
  icon: WeatherIconType
  time: number 
  animate: boolean
  data: any 
}
 
class DatePicker extends React.Component<IProps> {
  render() {  
    return (
      <div className="dates-wrap">
        <div className="days">
          {this.props.data.map((dayData: any) => (
            <DataCard
              icon={getIconTypeFromApi(dayData.icon)}
              temperatureMax={dayData.temperatureMax}
              time={dayData.time}
              key={dayData.time}
            />
          ))}         
        </div> 
      </div>
    )
  }
}

export default DatePicker;