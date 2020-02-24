import React, { Component } from 'react';
import Screen from '../components/screen/Screen';
import Keypad from '../components/keypad/Keypad';

class Calculator extends Component {
    state = {
        equation: '',
        results: "0",
    };
    clear = () => {
        this.setState({
            equation: '',
            results: "0",
        });
    };
    btnLayout = [
        [{ displayName: "C", value: "C", classNames: ["operator"] }, { displayName: <span>&larr;</span>, value: "bksp", classNames: ["operator"] }, { displayName: "%", value: "%", classNames: ["operator"] }, { displayName: <span>&divide;</span>, value: "/", classNames: ["operator"] }],
        [{ displayName: "9", value: "9", }, { displayName: "8", value: "8", }, { displayName: "7", value: "7", }, { displayName: <span>&times;</span>, value: "*", classNames: ["operator"] }],
        [{ displayName: "4", value: "4", }, { displayName: "5", value: "5", }, { displayName: "6", value: "6", }, { displayName: "+", value: "+", classNames: ["operator"] }],
        [{ displayName: "1", value: "1", }, { displayName: "2", value: "2", }, { displayName: "3", value: "3", }, { displayName: "-", value: "-", classNames: ["operator"] }],
        [{ displayName: "0", value: "0", }, { displayName: ".", value: ".", }, { displayName: "=", value: "=", classNames: ["btn--large"] }],
    ];
    onBtnPress = value => {
        const state = { ...this.state };
        const { equation } = state;
        const [lastInput] = equation.split(' ').slice(-1);

        if (/[0-9]/.test(value) && /[0-9]|(^$)|(\.)/.test(lastInput)) {  // numeric input
            this.setState({ ...state, equation: equation.concat(value) });
        } else if (/\./.test(value) && lastInput && !lastInput.includes('.')) { // decimal input
            this.setState({ ...state, equation: equation.concat(value) });
        } else if (/[+\-/*%]/.test(value)) { // operator input
            if (lastInput && equation) { // only accept input if preVal is numeric
                this.setState({ ...state, equation: equation.concat(` ${value} `) });
            }
        } else if (/[=]/.test(value)) { // evaluate input
            try {
                const evalResults = eval(equation);
                const results = Number.isInteger(evalResults) ? evalResults.toString() : evalResults.toFixed(3);
                this.setState({ ...state, results });
            } catch (e) {
                console.error(`Error! Unable to evaluate equation`)
            }
        } else if (/bksp/.test(value)) { // backspace input
            if (/^$/.test(lastInput)) { // remove whitespace with operators
                this.setState({ ...state, equation: equation.slice(0, -3) });
            } else {
                this.setState({ ...state, equation: equation.slice(0, -1) });
            }
        } else if (/C/.test(value)) { // clear input
            this.clear();
        }
    }
    render() {
        return (
            <main className="calculator">
                <Screen
                    equation={this.state.equation}
                    results={this.state.results}
                />
                <Keypad btnLayout={this.btnLayout} onClick={this.onBtnPress} />
            </main>
        );
    };
}

export default Calculator;