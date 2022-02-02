import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Card image={'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2022/gr-supra/2/2370/a61/1.png?fm=png&bg=white&w=768&h=328&q=90'} title={'2022 Toyota GR Supra'} model={'3.0 Premium'} miles={'7,735 miles'} price={'$55,990'} monthly={'Est. $900/mo'} />
      <Card image={'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2022/gr-supra/a91cfedition/2378/b22/1.png?fm=png&bg=white&w=768&h=328&q=90'} title={'2022 Toyota GR Supra'} model={'3.0 Premium'} miles={'7,735 miles'} price={'$55,990'} monthly={'Est. $900/mo'} />
    </div>
  );
}

export default App;
