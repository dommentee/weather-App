import * as React from 'react'

interface IProps {
  city: string,
  state_code: string
}

class SearchForm extends React.Component<IProps> {

  render() {
    return (
      <div className="seatch-box">
        <form>
          <input type="text" name="city" placeholder={`${this.props.city},${this.props.state_code}`}/>
        </form>
      </div>
    )
  }
}







export default SearchForm;