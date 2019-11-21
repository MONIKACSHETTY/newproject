import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends Component {

    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
            <div className="App">
                <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className='count'>{this.state.counter}</span>
                <div> <button className='reset' onClick={this.reset}>Reset</button></div>
            </div>
        )
    }

    increment(by) {
        console.log(`Increment in Counter Class ${by} `);
        this.setState((prevState) => {
            return { counter: prevState.counter + by }
        });

    }

    decrement(by) {
        console.log(`Decrement in Counter Class ${by} `);
        this.setState((prevState) => {
            return { counter: prevState.counter - by }
        });
    }

    reset() {
        this.setState(() => {
            return { counter: 0 }
        });
    }


}

class CounterButton extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/* <span className='count'>{this.state.counter}</span> */}
            </div>
        )
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter 