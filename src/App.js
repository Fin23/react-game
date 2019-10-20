import React, {Component} from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters"
import './App.css';

class App extends Component {
  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 1},
        {id: 3, value: 2},
        {id: 4, value: 3},
        {id: 5, value: 4},
        {id: 6, value: 5},
        {id: 7, value: 6},
        {id: 8, value: 7},
        {id: 9, value: 8},
        {id: 10, value: 9},
        {id: 11, value: 10}
    ]
};

constructor(){
  super();
  console.log('App - Constructor');
  // this.state = this.props.something;
}

componentDidMount(){
  // ajax call
  console.log('App - Mounted');
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
};

handleReset = () => {
const counters = this.state.counters.map(c => {
c.value = 0;
return c;
});
this.setState({ counters });
};

handleDelete = (counterId) => {

const counters = this.state.counters.filter(c => c.id !== counterId);
this.setState({counters});

};
  render() { 

    console.log('App - Rendered');
    return ( 
      <React.Fragment>   
<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
<main className="container">
<Counters 
counters={this.state.counters}
onReset={this.handleReset}
onIncrement={this.handleIncrement}
onDelete={this.handleDelete}
/>
</main>
</React.Fragment>
     );
  }
}
 
export default App;




