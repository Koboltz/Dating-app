import React from 'react';
import './App.css';
import Title from '../Title/Title';
import SignUp from '../SignUp/SignUp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Title />
        <SignUp />
        </header>
      </div>
    );
  }
}

export default App;