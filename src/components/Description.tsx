import * as React from 'react';

interface IProps {
  summary: string 
}

class Description extends React.Component<IProps> {
  render() {
    return (
      <div className="description">
        {this.props.summary}
      </div>
    )
  }
}

export default Description;