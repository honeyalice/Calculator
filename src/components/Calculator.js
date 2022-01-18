import React, { Component } from 'react';
import './Calculator.css';
import Result from './Result';
import KeyPad from "./KeyPad";

class Calculator extends Component {
    
    state = { output: "", lastResult: false};
    
    click = button => {
        let r = this.state.lastResult;
        let result = this.state.output;
        if (r) {
            this.clear();
            if( button === "CE"|| button === "C"){
                this.setState({lastResult: false});
            } else if (button === "+" || button === "-" || button === "*" || button === "/"){
                this.setState({output: result + button, lastResult: false});
                
                
            } else {
                this.setState({output: button, lastResult: false});
            }
        }
        else if(button === "="){
            this.calculate();
            this.setState({lastResult: true});
        }
        else if (button === "C") {
            this.clear();
        } else if (button === "CE") {
            this.setState({output: result.slice(0,-1)})
        }
        
        else {
            this.setState({output: result + button})
        }
    };

    clear = () =>{
        this.setState({output: ""})
    };

    calculate = () =>{
        let res = "";
        if(this.state.output.includes("//")){
            res = this.state.output.replace("//","++");
        } else {
            res = this.state.output;
        }
        try {
            this.setState({
                // eslint-disable-next-line
                output: eval(res) })
        } catch (err) {
            this.setState({
                output: "error"})
        }
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result output = {this.state.output}/>
                    <KeyPad click = {this.click}/>
                </div>
            </div>
        );
    }
}
export default Calculator;