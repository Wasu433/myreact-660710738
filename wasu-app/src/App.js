import logo from './hysilens2.png';
import './App.css';
import Hello from './hello';
import GoodBye from './bye';
import JsxExamples from './Components/JsxExamples.jsx';

function App() {
  return (
    <div className="App">
      <Hello/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is my React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GoodBye/>
      <JsxExamples/>
  
    </div>
  );
}

export default App;
// Edit <code>src/App.js</code> and save to reload.