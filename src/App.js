import './App.css';
import Banner from './Components/Banner';
import Bseller from './Components/Bseller';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Bseller/>
      <Gallery/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
