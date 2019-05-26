import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeolocatedProps, geolocated } from 'react-geolocated';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import SearchForm from './components/SearchForm';
import TempDegree from './components/TempDegree';
import Description from './components/Description';
import Weathersvg from './components/Weathersvg';
import DatePicker from './components/DatePicker';

interface Isatate {

}

interface IProps extends GeolocatedProps {

}

class App extends React.Component<IProps, Isatate> {

  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.coords) return;
    const lat = this.props.coords!.latitude
    const long = this.props.coords!.longitude//!coords = if cords isnt avaliable
    const geoLocate =`http://api.geonames.org/findNearestAddressJSON?lat=${lat}&lng=${long}&username=dom_m`;
      const proxy = `https://cors-anywhere.herokuapp.com/`;//cross-orogin location from anywhere
      const api = `${proxy}https://api.darksky.net/forecast/e6daff41a677622a1915b60f7beb5429/${lat},${long}`;//usses proxy to pull info from API from any location
      fetch(geoLocate)
        .then(async (response) => {
          const data = await response.json();
          console.log(data);
          //locationTimeZone.innerHTML = data.address.placename;

        })
      fetch(api)//pulls info from the API
        .then(async (response) => {//json() method of body mixin
          this.setState({weatherData: await response.json()});//takes pulled data and returns as json
        })
  }
   
  render() {
    if(!this.props.coords) return <div>allow location</div>
    console.log(this.state)
    return (
      <div className="main">
        <SearchForm />
        <TempDegree />
        <Description />
        <Weathersvg />
        <DatePicker/>
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

