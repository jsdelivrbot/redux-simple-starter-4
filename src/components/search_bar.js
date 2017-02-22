import React, { Component } from 'react';

/* Functional component "Dumb Component"
const SearchBar = () => {
  return <input />;
};
*/

// Class based component, {Component} allows change from React.Component to just Component
// Only class based components have state
class SearchBar extends Component{
  constructor(props){
    super(props);
    // only in constructor would state be changed manually like this to equal object
    this.state = { search_term: '' };
  }
  render(){
    return(
      // 1) <input onChange={this.onInputChange}/>
      //<input onChange={(event) => console.log(event.target.value)} />
      //<input onChange={event => console.log(event.target.value)} />
      // always manipulate with 'setState' to inform React there was a change | this.state.term = event.target.value IS BAD
      // Value of the input: {this.state.search_term} is ok because it is only a reference
      // Control Field has it's value set by state
      <div>
        {/* <input onChange={event => this.setState({search_term: event.target.value})} /> */}
        <input
          value={this.state.search_term}
          onChange={event => this.setState({search_term: event.target.value})} />
      </div>
    );
  }

  // 1) onInputChange(event){
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
