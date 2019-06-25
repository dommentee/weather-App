import * as React from 'react';

interface IProps {
  summary: string 
  precipProbability: number
  windSpeed: number
}

class Description extends React.Component<IProps> {
  render() {
    return (
      <div className="description">
        <ul>
          <li>{this.props.summary}</li>
          <li><span>PRECIP</span>: {this.props.precipProbability}%</li>
          <li><span>Windspeed</span>: {this.props.windSpeed}</li>
        </ul>
      </div>
    )
  }
}

export default Description;