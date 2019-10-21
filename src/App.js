import React, {Component} from 'react';
import NavBar from './components/navbar';

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import Card from "./components/Card"
import Counters from "./components/counters"
import './App.css';
import cards from "./cards.json";

// import bran from './images/bran.jpg';
// import forest from '../images/childrenOfTheForest.jpg'; 
// import danny from '../images/danny.jpg';
// import drogon from '../images/drogon.jpg';
// import eddard from '../images/eddard.jpg';
// import night from '../images/nightKing.jpg';
// import prison from '../images/prison.jpg';
// import sansa from '../images/sansa.jpg';
// import T from '../images/T.jpg';
// import theon from '../images/theon.jpg';
// import tormund from '../images/tormund.jpg';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
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




gameOver = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore);
    });
  }
  this.state.cards.forEach(card => {
    card.count = 0;
  });
  alert(`Game Over :( \nscore: ${this.state.score}`);
  this.setState({score: 0});
  return true;
};







clickCount = id => {
  this.state.cards.find((o, i) => {
    if (o.id === id) {
      if(cards[i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
      }
    }
  });
};




  render() { 

    console.log('App - Rendered');
    return ( 
      <React.Fragment>   



<Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>GOT click Game, by Ross J.</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
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




