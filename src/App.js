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
      <html>
        <Navbar />
        <section>
          <Header />
        </section>
        <section>
          <CarResult />
        </section>
        <section>
          <Featured />
        </section>
        <section>
          <Finance />
          <Footer />
        </section>
      </html>
    </div>
  );
}

export default App;
