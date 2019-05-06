import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import Hello from './components/Hello';


interface Isatate {

}

class App extends React.Component<{}, Isatate> {

  render() {
    return (
      <Hello/>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('render-target'));

