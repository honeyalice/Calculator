import React, {Component} from 'react';

class KeyPadComponent extends Component {
    click = evt => {
        this.props.click(evt.target.name);
    };

    render() {
        return (
            <div className="button">
                <button name="(" onClick={this.click}>(</button>
                <button name="CE" onClick={this.click}>CE</button>
                <button name=")" onClick={this.click}>)</button>
                <button name="C" onClick={this.click}>C</button><br/>


                <button name="1" onClick={this.click}>1</button>
                <button name="2" onClick={this.click}>2</button>
                <button name="3" onClick={this.click}>3</button>
                <button name="+" onClick={this.click}>+</button><br/>


                <button name="4" onClick={this.click}>4</button>
                <button name="5" onClick={this.click}>5</button>
                <button name="6" onClick={this.click}>6</button>
                <button name="-" onClick={this.click}>-</button><br/>

                <button name="7" onClick={this.click}>7</button>
                <button name="8" onClick={this.click}>8</button>
                <button name="9" onClick={this.click}>9</button>
                <button name="*" onClick={this.click}>*</button><br/>


                <button name="." onClick={this.click}>.</button>
                <button name="0" onClick={this.click}>0</button>
                <button name="=" onClick={this.click}>=</button>
                <button name="/" onClick={this.click}>/</button><br/>


            </div>
        );
    }
}


export default KeyPadComponent;