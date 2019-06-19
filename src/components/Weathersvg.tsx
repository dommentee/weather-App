import * as React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

interface IProps {
  icon: WeatherIconType
  size: number
  color: string
  animate: boolean
}
export enum WeatherIconType {
  'CLEAR_DAY' = 'CLEAR_DAY',
  'CLEAR_NIGHT' = 'CLEAR_NIGHT',
  'PARTLY_CLOUDY_DAY' = 'PARTLY_CLOUDY_DAY',
  'PARTLY_CLOUDY_NIGHT' = 'PARTLY_CLOUDY_NIGHT',
  'CLOUDY' = 'CLOUDY',
  'RAIN' = 'RAIN',
  'SLEET' = 'SLEET',
  'SNOW' = 'SNOW',
  'WIND' = 'WIND',
  'FOG' = 'FOG'
}
const WeatherIcon: React.FC<IProps> = ReactAnimatedWeather as any
export const getIconTypeFromApi = (iconName: string) => iconName.toUpperCase().replace(/-/g,"_") as WeatherIconType// function that takes icon in api and converts dashes to underscore and to uppercase

class Weathersvg extends React.Component<IProps> {
  render() {
    return (
      <div className="weather-svg">
        <WeatherIcon {...this.props}/>{/* spread function*/}
      </div>
    
    )
  }

}

export default Weathersvg;