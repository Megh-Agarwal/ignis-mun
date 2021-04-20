import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Content from './components/Content/Home/Overview/Overview';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Content />
    </div>
  );
}

export default App;
