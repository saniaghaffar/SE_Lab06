import logo from './logo.svg';
import './App.css';
import CELOGO from './CELogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="heading">Welcome to Our React App</h1>

        <div className="scroll-container">
          <img
            src={CELOGO}
            alt="Example"
            className="image"
          />
          <hr></hr>
          <pre className="text">
            Submitted By: <br></br>
            Sania Ghaffar      2022-CE-07<br></br>
            Humna Salik       2022-CE-20<br></br>
            Memona Saeed         2022-CE-24<br></br>
          </pre>
          <br></br>
          <p className="text">
            Submitted to:<br></br>
            Ma'am Sana
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
