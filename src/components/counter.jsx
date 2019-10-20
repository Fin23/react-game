import React, { Component } from 'react';

import bran from '../images/bran.jpg';


         

class Counter extends Component {
    state = {
            value: this.props.counter.value,
            tags: ['tag1', 'tag2', 'tag3'],
             imageUrl: '../images/bran.jpg' 
};


renderTags(){
    if (this.state.tags.length === 0) return <p>There are no tags

    </p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
}

// constructor(){
//     super();
//   this.handleIncrement = this.handleIncrement.bind(this);
// }
    handleIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1});
    };

    render() {
     
        
        return (
        <div>
            <h4>{this.props.id}</h4>
        <img src={bran} alt=""/>
        <span style = {{fontSize: 30}}
         className={this.getBadgeClasses()}>{this.formatCount()}
        </span>

        <button 
        onClick ={() => this.handleIncrement({id:1})} 
        className="btn btn-secondary btn-sm">
            Increment
            </button>
    
    <button onClick={() => this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>

        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}
        {/* below creates a list below each button */}
        {/* {this.renderTags()} */}

    </div>
        );
    }    


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;