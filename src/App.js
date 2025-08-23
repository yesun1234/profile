import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './assets/common.css'
import Section01 from './components/Section01';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/"  element={<Section01 />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
