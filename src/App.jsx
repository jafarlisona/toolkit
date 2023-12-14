import Calculator from "./components/Calculator";
import { Counter } from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="body">
      <div className="container">
        <Counter />
        <Calculator />
      </div>
      <Todo />
    </div>
  );
}

export default App;
