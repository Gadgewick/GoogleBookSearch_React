import React, {Component} from 'react';
import SearchWindow from './searchWindow/searchWindow';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookSearch: []
    };
  }



  render() { 
    console.log('componentDidMount')
  return (
    <div className="App">
      <header className="App-header">        
      <h1>Google Book Search</h1>
      </header>
      <main>

      <SearchWindow />
        
      </main>
    </div>
  )};

}

export default App;
