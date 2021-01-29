import logo from "./logo.svg";
import "./App.css";
import Calendario from "./components/Calendario";
import FetchRandomUser from "./components/FetchRandomUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Customers /> */}
        {/* <Calendario /> */}
        <FetchRandomUser />
      </header>
    </div>
  );
}

export default App;
