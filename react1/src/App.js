import './App.css';
// Importerar alla komponenter som ska visas nedan

// Functional component med interpolering
import FunctionTest from './component/FunctionTest';
//  Class component
import ClassTest from './component/ClassTest';
// Function component med single props
import FunctionProps from './component/FunctionProps';
// Function component med two props
import FunctionProps2 from './component/FunctionProps2';

// Lägg in funktionen här i return så att den kan renderas ut
function App() {
  return ( <div className="App">
    <FunctionTest/>
    <ClassTest/>
    <FunctionProps name=" Emelie"/> {/* informationen som är skriven här skickas till FunctionProps */}
    <FunctionProps2 first=" Emelie" last=" Widén"/> {/* informationen som är skriven här skickas till FunctionProps */}
  </div>
  );
}

export default App;
