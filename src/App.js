import Navbar from './Components/Navbar';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Routes from "./router"
function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes />
    </div>
  );
}

export default App;
