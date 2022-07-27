import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import vegetables from '.vegetables';

//create a state object which consists of an empty array called vegetables

class VegetableSearch extends Component {
  constructor() {
      super();
      this.state = {
          vegetables: [],
      };
  }
}

componentDidMount(); {
  let vegetableList = []
  fetch(/*data from jsonbin*/)
      .then(response => {
          return response.json()
      }).then(data => {
      vegetableList = data.results.map((vegetable) => {
          return vegetable
      })
      console.log(vegetableList)
      this.setState({
          vegetables: vegetableList,
      })
  })
}