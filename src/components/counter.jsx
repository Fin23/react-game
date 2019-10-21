import React, { Component } from 'react';

import bran from '../images/bran.jpg';
import forest from '../images/childrenOfTheForest.jpg';
// import danny from '../images/danny.jpg';
// import drogon from '../images/drogon.jpg';
// import eddard from '../images/eddard.jpg';
// import night from '../images/nightKing.jpg';
// import prison from '../images/prison.jpg';
// import sansa from '../images/sansa.jpg';
// import T from '../images/T.jpg';
// import theon from '../images/theon.jpg';
// import tormund from '../images/tormund.jpg';



         

class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //ajax call and get new data from the server 
        }
    }

    // componentWillMount(){
    //     console.log("Counter - Unmount");
    // }

    render() {
     console.log("Counter - Rendered");
        
        return (
        

        <div>
            <h4>{this.props.id}</h4>

       {/* <button>
       <img src={bran} alt=""/>
       </button> */}
       

        <span style = {{fontSize: 30}}
         className={this.getBadgeClasses()}>{this.formatCount()}
        </span>

        <button 
        onClick ={() => this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm">
            Increment
            </button>
    
    <button onClick={() => this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>

      

    </div>
        );
    }    


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;