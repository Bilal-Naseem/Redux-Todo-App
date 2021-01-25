import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from "./components/AddTodo";
import CompletedList from './components/CompletedList';

import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="container custom-container">
          <div className="row my-4">
            <div className="col align-self-center">
              <TodoList/>
            </div>
           
          </div>
          <div className="row my-4">
            <div className="col align-self-center">
              <CompletedList/>
            </div> 
          </div>
          <div className="row my-4">
            <div className="col align-self-center ">
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
