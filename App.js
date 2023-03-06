// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Protected from "./Components/Protected/Protected"


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     <BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route
path="/home"
element={
<Protected>
  <Home />
</Protected>
}
/>
</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
