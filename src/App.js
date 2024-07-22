
import './App.css';
import Maincontent from "./components/Maincontent"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Maincontent />
      </Router>

    </>
  );
}
export default App;
