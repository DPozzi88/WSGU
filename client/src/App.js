import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers/customers";
import Calendario from "./components/Calendario";
import Shoot from "./components/Shoot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Customers /> */}
        <Calendario />
      </header>
    </div>
  );
}

export default App;
