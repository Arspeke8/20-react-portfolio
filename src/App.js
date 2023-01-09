import logo from './logo.svg';
import './App.css';
import MyMenu from './components/MyMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to Ryan's React Portfolio!
        </p>
       <MyMenu></MyMenu> 
      </header>
    </div>
  );
}

export default App;
