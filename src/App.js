import './App.css';
import CarResult from './components/CarResult';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CarResult />
      <Footer />
    </div>
  );
}

export default App;
