import React from 'react';
import ReactDOM from 'react-dom';


class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentInput: '0',
        equation: '',
        operatorFlag1: false,
        operatorFlag2: false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(value) {
   if (value === '0' || 
       value === '1' ||
       value === '2' ||
       value === '3' ||
       value === '4' ||
       value === '5' ||
       value === '6' ||
       value === '7' ||
       value === '8' ||
       value === '9'    
       ) {
       if (value !== '0') {
           let currentInput = this.state.currentInput;
           currentInput += value;
           this.setState({currentInput}); 
           this.setState({equation: this.state.equation + value});
         } else {
           if (this.state.currentInput !== '0') {
             let currentInput = this.state.currentInput;
              currentInput += value;
               this.setState({currentInput}); 
  
           }
         }
      }
      if(value === 'AC') {
        this.setState({ currentInput: '0'});
        this.setState({ equation: ''});
      }
      if(value === '*' || 
         value === '/' ||
         value === '+' ||
         value === '-'
        ) {
        if (!this.state.operatorFlag1) {
          this.setState({currentInput: value})
          this.setState({equation: this.state.equation + value});
          this.setState({operatorFlag1 = true})
        }
        else if (!this.state.operatorFlag2) {
                  this.setState({currentInput: value})
                  this.setState({equation: this.state.equation + value});
            }
         }
      }
  
    render() {
      return (
      <div className='calculator-box'>
       <Display currentInput={this.state.currentInput} equation={this.state.equation} />
       <div id='grid-container'>
         <Button id='clear' value='AC' handleClick={this.handleClick}/>
         <Button id='divide' value='/' handleClick={this.handleClick}/>
         <Button id='multiply' value='*' handleClick={this.handleClick}/>
         <Button id='seven' value='7' handleClick={this.handleClick}/>
         <Button id='eight' value='8' handleClick={this.handleClick}/>
         <Button id='nine' value='9' handleClick={this.handleClick}/>
         <Button id='subtract' value='-' handleClick={this.handleClick}/>
         <Button id='four' value='4' handleClick={this.handleClick}/>
         <Button id='five' value='5' handleClick={this.handleClick}/>
         <Button id='six' value='6' handleClick={this.handleClick}/>
         <Button id='add' value='+' handleClick={this.handleClick}/>
         <Button id='one' value='1' handleClick={this.handleClick}/>
         <Button id='two' value='2' handleClick={this.handleClick}/>
         <Button id='three' value='3' handleClick={this.handleClick}/>
         <Button id='zero' value='0' handleClick={this.handleClick}/>   
         <Button id='decimal' value='.' handleClick={this.handleClick}/>
         <Button id='equals' value='=' handleClick={this.handleClick}/>
       </div>
      </div>
      )
    }
  }
  
  class Display extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
       <div>
        <div id='equation'>{this.props.equation}</div>
         <div id='display'>{this.props.currentInput}</div>
       </div>
      )
    }
  }
  
  class Button extends React.Component {
    constructor(props) {
      super(props);
      this.runHandleClick = this.runHandleClick.bind(this);
    }
    runHandleClick() {
      this.props.handleClick(this.props.value);
    }
    render() {
      return (
      <button id={this.props.id} value={this.props.value} onClick={this.runHandleClick}>{this.props.value}</button>
      )
    }
  }
  
  
  
  
  ReactDOM.render(<Calculator />, document.getElementById('app'));