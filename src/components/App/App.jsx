import './App.sass'
import Header from '../Header/Header.jsx';
import Main from "../Main/Main.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
      <Router>
          <Header />
          <Main />
      </Router>
  );
}

export default App
