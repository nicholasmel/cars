import './App.css';
import Card from './components/Card';
import CarResult from './components/CarResult';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CarResult />
    </div>
  );
}

export default App;
