import { Element } from 'react-scroll';
import './App.css';
import './assets/common.css'
import Nav from './components/Nav';
import Section01 from './components/Section01';
import Section02 from './components/Section02';

function App() {
  return (
    <div className='app'>
      <div className="App">
        
        <Element name="sec01">
          <Section01 />
        </Element>
        <Nav />
        <Element name="aboutMe">
          <Section02 />
        </Element>
      </div>
    </div>
  );
}

export default App;
