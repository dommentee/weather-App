import * as React from 'react';

class TempDegree extends React.Component<{}> {

  render() {
    return (
      <div className="temp-degree">
        <div className="temperature">
          65
          <span>F</span>
        </div>
      </div>
    )
  }
}


export default TempDegree;