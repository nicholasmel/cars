import './App.css';
import CarResult from './components/CarResult';
import Featured from './components/Featured';
import Finance from './components/Finance';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CarResult />
      <Featured />
      <Finance />
      <Footer />
    </div>
  );
}

export default App;
