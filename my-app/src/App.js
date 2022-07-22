import PEPO from './Funneduck.jpg';
import './App.css';
import LOL from './Homer.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header > 
        <img src={PEPO} className="App-logo" alt="pepo" />
        <a href="https://www.boomerangtv.dk/videos/looney-tunes-cartoons-daffys-tyggegummi"> Loney toons  </a>

        <img src={LOL} className="App-logo" alt="LOL" />
        <a href="https://www.youtube.com/watch?v=FbGsmAC2NHE"> Springfield   </a>
       
      </header>
    </div>
  );
}

export default App;
