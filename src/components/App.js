import ItemReducer from '../reducers/ItemReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import Signin from './Signin';
import User from './Users'
import Admin from './Admin'
import PosSystem from './PosSystem/PosSystem'

const store = createStore(
  ItemReducer,
  composeWithDevTools()
)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signin />}></Route>
          <Route exact path='/admin' element={   <Admin />}></Route>
          <Route exact path='/user' element={<User />}></Route>
          <Route exact path='/posSystem' element={<PosSystem/>}></Route>
        </Routes>
        </BrowserRouter>  
      </Provider>
    </div>
  );
}

export default App;