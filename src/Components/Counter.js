
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
        }

    }
    
    // addCounterHandler() {
    //    const counter = this.state.counter + 1;
    //    this.setState({
    //     counter : counter
    //    })

    // }
    addCounterHandler () {
        this.setState((prevstate)=> {
           return { counter : prevstate.counter + 1}

        })
    }

    // lowCOunterHandler() {
    //     const counter = this.state.counter - 1;
    //     this.setState({
    //         counter : counter,
    //     })
    // }

    lowCOunterHandler() {
        this.setState((prevstate) =>{
            return{
                counter: prevstate.counter - 1 ,
            }

        })
    }
   
    render() { 
        return ( 
            <div style={{textAlign:"center"}}>
                <h1>Counter</h1>
                <p>{this.state.counter}</p>
                <button onClick={()=>{this.addCounterHandler()}}> Add Count</button>
                <button onClick={() =>{this.lowCOunterHandler()}}>Lower Count</button>
            </div>
         );
    }
}

export default Counter;
