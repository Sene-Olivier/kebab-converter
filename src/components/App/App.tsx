import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Footer from '../Footer/Footer';
import './App.scss';

import currenciesData from '../../data/currencies';

function App() {
  return (
    <div className="app">
      <Header />
      <Currencies currencies={currenciesData} />
      <Footer />
    </div>
  );
}

export default App;
