import * as React from 'react';

interface IProps {
  temperature: number | string
}
class TempDegree extends React.Component<IProps> {

  render() {
    return (
      <div className="temp-degree">
        <div className="temperature">
          {this.props.temperature}
          <span>°</span>
        </div>
      </div>
    )
  }
}


export default TempDegree;