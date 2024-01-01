import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Macro/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Offers from './screens/Offers';
import History from './screens/History';
import Explore from './screens/Explore';
import store from './data/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/explore' element={<Explore />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/history' element={<History />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
