import './App.css';
import Pants from './PantsComponent/Pants';
import Jacket from './JacketComponent/Jacket';
import Suits from './SuitsComponent/Suits';
import Ties from './TiesComponent/Ties';

function App() {
  
  return (
    <div className="App">
      <h1>Inventory Component</h1>
       <Pants mark= {"Boss"} currentCount={30}  IdealCount={60} />
       <Jacket mark= {"Denim"} currentCount={50} IdealCount={80}/>
       <Suits mark={"Boss"}  currentCount={300}   IdealCount={500}/>
       <Ties mark={"Ralph Lauren"}  currentCount={100}   IdealCount={200}/>

    </div>
  );
}

export default App;