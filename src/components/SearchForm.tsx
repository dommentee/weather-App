import * as React from 'react'

interface IProps {
  city: string,
  state_code: string
  town: string;
}

class SearchForm extends React.Component<IProps> {

  render() {
    const city = this.props.city ? this.props.city: this.props.town //tenary opp
    return (
      <div className="seatch-box">
        <form >
          <input type="text" name="city" placeholder="" /> 
          <button>get Weather</button>
        </form>
      </div>
    )
  }
}







export default SearchForm;