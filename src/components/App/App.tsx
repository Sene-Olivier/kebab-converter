import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Footer from '../Footer/Footer';
import './App.scss';

import kebabsData from '../../data/kebabs';

function App() {
  return (
    <div className="app">
      <Header />
      <Currencies kebabs={kebabsData} />
      <Footer />
    </div>
  );
}

export default App;
