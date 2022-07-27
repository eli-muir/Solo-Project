import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Vegetables from '.vegetables';
import { render } from 'react-dom/cjs/react-dom.production.min';

//create a state object which consists of an empty array called vegetables

class VegetableSearch extends Component {
  constructor() {
      super();
      this.state = {
          vegetables: []
      };
  }
};

componentDidMount() {
  let vegetableList = [];
  fetch("https://api.jsonbin.io/v3/b/62e08bf02c868775a539f469")
    .then(response => {
          return response.json();
      }).then(data => {
      vegetableList = data.results.map((vegetable) => {
          return vegetable;
      })
      console.log(vegetableList);
      this.setState({
          vegetables: vegetableList
      });
  });
}

render() {
  return (
          <Vegetables state={this.state}/>
  );
}

export default VegetableSearch;

ReactDOM.render(<VegetableSearch />, document.getElementById('react-search'));