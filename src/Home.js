//import logo from './logo.svg';
import './Home.css';
// import MyMenu from './components/MyMenu';
import NavBar from './components/NavBar';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
    <NavBar></NavBar>
       <p>
          Welcome to Ryan's React Portfolio!
        </p>
       {/* <MyMenu></MyMenu>  */}
      </header>
    </div>
  );
}

export default Home;
