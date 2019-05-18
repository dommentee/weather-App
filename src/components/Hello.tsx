import * as React from 'react';
import { GeolocatedProps } from 'react-geolocated';



interface IProps {
  geodata: GeolocatedProps
}

interface IState {
  weatherData: any
}

class Hello extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      weatherData: null//initailizing data
    }
  }

  componentWillMount() {
    const lat = this.props.geodata.coords!.latitude
    const long = this.props.geodata.coords!.longitude//!coords = if cords isnt avaliable
    const geoLocate =`http://api.geonames.org/findNearestAddressJSON?lat=${lat}&lng=${long}&username=dom_m`;
      const proxy = `https://cors-anywhere.herokuapp.com/`;//cross-orogin location from anywhere
      const api = `${proxy}https://api.darksky.net/forecast/e6daff41a677622a1915b60f7beb5429/${lat},${long}`;//usses proxy to pull info from API from any location
      fetch(geoLocate)
        .then(async (response) => {
          const data = await response.json();
          console.log(data.address.placename);
          //locationTimeZone.innerHTML = data.address.placename;

        })
      fetch(api)//pulls info from the API
        .then(async (response) => {//json() method of body mixin
          this.setState({weatherData: await response.json()});//takes pulled data and returns as json
        })
  }

  render() {
    if (!this.state.weatherData) return <div>Loading....</div>
    console.log(this.state)
    //made sure data is avaliable can be safely used below and accessed under this.state.weatherData

  }

}

export default Hello;
