import logo from './logo.svg';
import { UseState } from './components/UseState';
//import UseEffect from './components/UseEffect';
import {UseRefGlobal, UseRefDom} from './components/UseRef';
import UseReducer from './components/UseReducer';
import UseContext from './components/UseContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      {/* <UseEffect /> */}
      <UseRefGlobal />
      <UseRefDom />
      <UseReducer />
      <UseContext />
    </div>
  );
}

export default App;
