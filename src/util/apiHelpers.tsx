export interface CityData {//outline of data when pulled from api
  city: string
  continent: string
  country: string
  country_code: string
  county: string
  postcode: string
  road: string
  road_type: string
  state: string
  state_code: string
  town: string
}

export interface WeatherData {//outlines data
  currently: {
    dewPoint: number
    humidity: number
    icon: string
    nearestStormDistance: number
    ozone: number
    precipIntensity: number
    precipIntensityError: number
    precipProbability: number
    precipType: string
    pressure: number
    summary: string
    temperature: number
    time: number
    uvIndex: number
    visibility: number
    windBearing: number
    windGust: number
    windSpeed: number
  }

  daily: {
    data: {
      icon: string
      temperatureMax: number
      time: number
    }[]
  }
}



interface LatLongData {
  components: CityData//why
  lat: number,
  long: number,
}

export function getCityFromLatLong(lat: number, long: number): Promise<CityData | null> {//function to find current location
  return new Promise((resolve, reject) => {
    const geolocate = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=54a057823d6f4b29bd528ba975b4b997`;
    fetch(geolocate) 
      .then(response => response.json())
      .then(data => resolve(data.results[0].components))//.components?
  })
}

export function getLatLongFromCity(cityName: string): Promise<LatLongData[] | null> {// function to turn coords in to city 
  return new Promise((resolve, reject) => {
    const geolocate = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=54a057823d6f4b29bd528ba975b4b997`;
    fetch(geolocate)
      .then(response => response.json())
      .then(data => resolve(data.results));
  })
}
export function getWeatherData(lat: number, long: number): Promise<WeatherData> {
  return new Promise((resolve, reject) => {//promise instead of asynch
    const proxy = `https://cors-anywhere.herokuapp.com/`
    const weatherApi = `${proxy}https://api.darksky.net/forecast/e6daff41a677622a1915b60f7beb5429/${lat},${long}`;//usses proxy to pull info from API from any location
    fetch(weatherApi) //pulls info from the API
      .then(response => response.json())
      .then(data => resolve(data)) 
      .catch(error => reject(error));
  })
}
