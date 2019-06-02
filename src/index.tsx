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
import { getCityFromLatLong, CityData, getWeatherData, WeatherData } from './util/apiHelpers';
import { any } from 'prop-types';

interface IState {//types
  coords: GeolocatedProps['coords'];
  userLocation: CityData | null,
  weatherData: WeatherData | null //weatherData pulls from Weather data pull of data
}

interface IProps extends GeolocatedProps { 
  
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {//types
    super(props)
    this.state = {
      coords: undefined,
      userLocation: null,
      weatherData: null
    }
  }
  componentWillReceiveProps(currentProps: IProps, newProps: IProps) {// component will recive new props
    if (!currentProps.coords) return;//if current coords do not = coords return
    this.setState({ coords: currentProps.coords });//set the cords to the current coords
    const lat = currentProps.coords.latitude
    const long = currentProps.coords.longitude

    getCityFromLatLong(lat, long).then(data => {//uses log lat to pull to location from api
      if(data)this.setState({userLocation: data})
    })

    getWeatherData(lat, long).then(data => {
      if(data)this.setState({weatherData: data})
    })
  }
   
  render() {
    if (!this.props.coords) return <div>Finding location</div>
    if (!this.state.weatherData || !this.state.userLocation) return <div>...Loading</div>
    console.log(this.state)
    return (
      <div className="main">
        <SearchForm
          city={this.state.userLocation.city} 
          state_code={this.state.userLocation.state_code}
        />
        <TempDegree temperature={this.state.weatherData.currently.temperature}/>
        <Description summary={this.state.weatherData.currently.summary}/>
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

