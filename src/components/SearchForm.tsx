import * as React from 'react'

interface IProps {
  city: string,
  state_code: string
  town: string;
  //searchCity: (text: string) => void

}
interface IState {

}

class SearchForm extends React.Component<IProps, IState> {

  
  handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(this.props.city ? this.props.city: this.props.town)
    this.setState({})
    
  }

  render() {
    const city = this.props.city ? this.props.city: this.props.town //tenary opp
    return (
      <div className="seatch-box">
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            value={`${city}, ${this.props.state_code}`}
            onChange={event => this.setState({placeholder: event.target.value})}
            type="text"
            //placeholder={`${this.props.city}, ${this.props.state_code}`}
          /> 
        </form>
      </div>
    )
  }
}







export default SearchForm;