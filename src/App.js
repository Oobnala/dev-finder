import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';
import './App.scss';

function App() {
  return (
    <div className="theme--light container">
      <Header />
      <Search />
      <Profile />
    </div>
  );
}

export default App;
