import logo from './logo.svg';
import './App.css';

function App() {
  const currDate = new Date();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>The time is now {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
