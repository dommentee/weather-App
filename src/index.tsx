import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeolocatedProps, geolocated } from 'react-geolocated';
import './index.scss';
import SearchForm from './components/SearchForm';
import TempDegree from './components/TempDegree';
import Description from './components/Description';
import Weathersvg,{WeatherIconType,getIconTypeFromApi} from './components/Weathersvg';
import DatePicker from './components/DatePicker';
import { getCityFromLatLong, CityData, getWeatherData, WeatherData } from './util/apiHelpers';

interface IState {//types
  coords: GeolocatedProps['coords'];
  userLocation: CityData | null,
  weatherData: WeatherData | null //weatherData pulls from Weather data in api
}

interface IProps extends GeolocatedProps { 
  
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {//types
    super(props)
    this.state = {
      coords: undefined,
      userLocation: null,
      weatherData: null,
  
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
    if (!this.props.coords) return <div className="pre-loader-wrap"><div id="preloader"></div></div>
    if (!this.state.weatherData || !this.state.userLocation) return <div className="pre-loader-wrap"><div id="preloader"></div></div>
    console.log(this.state)
    console.log(this.state.weatherData.daily.data)
    return (
      <div className="main">
        <SearchForm
          city={this.state.userLocation.city} 
          state_code={this.state.userLocation.state_code}
          town={this.state.userLocation.town}
        />
        <TempDegree temperature={this.state.weatherData.currently.temperature}/>
        <Description
          summary={this.state.weatherData.currently.summary}
          precipProbability={this.state.weatherData.currently.precipProbability}
          windSpeed={this.state.weatherData.currently.windSpeed}
        />
        <Weathersvg
          icon={getIconTypeFromApi(this.state.weatherData.currently.icon)}
          size={190}
          color={'white'}
          animate={true}
        />
        <DatePicker
          icon={getIconTypeFromApi(this.state.weatherData.currently.icon)}
          temperature={this.state.weatherData.currently.temperature}
          time={this.state.weatherData.currently.time}
          animate={false}
          data={this.state.weatherData.daily.data}

        />
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


