import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeolocatedProps, geolocated } from 'react-geolocated';
import './index.scss';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';
import SearchForm from './components/SearchForm';
import TempDegree from './components/TempDegree';
import Description from './components/Description';
interface Isatate {

}

interface IProps extends GeolocatedProps {

}

class App extends React.Component<IProps, Isatate> {

  constructor(props: IProps) {
    super(props)
  }

  render() {
    if(!this.props.coords) return <div>allow location</div>
    console.log(this.props)
    return (
      <div>
        <Hello geodata={this.props} />
        <SearchForm />
        <TempDegree />
        <Description/>
      </div>
    )
  }

}

const AppWithGeo = geolocated({// higher order component
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

ReactDOM.render(<AppWithGeo />, document.getElementById('render-target'));// AppWithGeo becomes main branch
registerServiceWorker();

