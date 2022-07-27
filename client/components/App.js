import React, { Component } from 'react';

//create a state object which consists of an empty array called vegetables

class App extends Component {
        state = {
          vegetables: []
      };

//Invoked immediately after a component is mounted. Loading data from remote endpoint.
componentDidMount() {
  //fetch data at within jsonbin database
  fetch("https://api.jsonbin.io/v3/b/62e199c1248d43754f07e01f",{
    method: "GET",
    headers: {'X-Master-Key':'$2b$10$jXI1kR8OA0QgGAFVlQ.iPO4ZpV5SqGIC78jjp7pogA9.QYpkoN/ye'}
  })
    .then(response => {
      console.log(response)
      return response.json();
      }).then(data => {
          this.setState({
            vegetables: data
          })
      })
};

render () {
  return <div className='drop-down'>
    <p>Select Your Vegetable to Grow</p>
      <select>{
        this.state.vegetables.map((obj) => {
          return <option> {obj.name} </option>
        })

      }</select>
  </div>;
}
}


export default App;