import './App.css';
import Pants from './Pants.js';
import Jacket from './Jacket.js';
import Suits from './Suits.js';
import Ties from './Ties.js';

function App() {
  return (
    <div className="App">
      <h1>Inventory Component</h1>
       <Pants StartCount="30"  IdealCount="60"/>
      <Jacket StartCount="10" IdealCount="20"/>
      <Suits StartCount="20"  IdealCount="40"/>
      <Ties StartCount="15"   IdealCount="30"/>

    </div>
  );
}

export default App;