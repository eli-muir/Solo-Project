import React from 'react';

class Vegetables extends React.Component {
    constructor() {
      super();
    }
}

render () {
  let vegetables = this.props.state.vegetables;
  let optionItems = vegetables.map((vegetable) =>
          <option key={vegetable.name}>{vegetable.name}</option>
      );

  return (
   <div>
       <select>
          {optionItems}
       </select>
   </div>
  )
}


export default Vegetables;