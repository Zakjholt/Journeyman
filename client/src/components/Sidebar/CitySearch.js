import React, { Component } from 'react';

class CitySearch extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} id="addCity">
          <input id="cityName" type="text"/>
        </form>
      </div>
    );
  }
}
CitySearch.contextTypes = {
  store: React.PropTypes.object
}
export default CitySearch;