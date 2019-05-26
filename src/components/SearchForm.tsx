import * as React from 'react'

class SearchForm extends React.Component<{}> {

  render() {
    return (
      <div className="seatch-box">
        <form>
          <input type="text" name="city" placeholder="Search for a place..."/>
        </form>
      </div>
    )
  }
}







export default SearchForm;