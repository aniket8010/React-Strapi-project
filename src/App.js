
import './App.css';
import { Todo } from './Pages/Todo/Todo';
import Provider from './Provider/Provider';

function App() {
  return (
    <Provider>
      <Todo />
    </Provider>
  );
}

export default App;
