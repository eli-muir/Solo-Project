import React, { Component } from 'react';



//create a state object which consists of an empty array called vegetables
class App extends Component {
  constructor(){
    super();
        this.state = {
          vegetables: [],
      };
  }

//Invoked immediately after a component is mounted. Loading data from remote endpoint.
componentDidMount() {
  //fetch json data
  fetch("https://data.mongodb-api.com/app/data-xzwtu/endpoint/data/v1",{
  headers: {
    'api-key': 'k4fh0lk3n9Z3CZP7EtnZFFFfGSumtTFeCETqmmbRrrmne9G7nRZHmFVIQtumNLLF',
  }

  })
    .then(function(response) {
      return response.json();
      }).then((json) => {
          this.setState({
            vegetables: json
          })
      })
      console.log(this.state.vegetables)
};

render () {
  return <div className='drop-down'>
    <p>Select Your Vegetable to Grow</p>
  </div>;
}
}

// ("https://api.jsonbin.io/v3/b/62e199c1248d43754f07e01f",{
//     method: "GET",
//     headers: {'X-Master-Key':'$2b$10$jXI1kR8OA0QgGAFVlQ.iPO4ZpV5SqGIC78jjp7pogA9.QYpkoN/ye'}
//   })

export default App;