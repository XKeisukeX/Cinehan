import './App.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Series from './Pages/Series';

function App() {

  var component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Trending":
      component = <Trending />
      break;
    case "/Movies":
      component = <Movies />
      break;
    case "/Series":
      component = <Series />
      break;
  }

  return (
    <>
    <Navbar />
    { component }
    </>
  )
}

export default App;
