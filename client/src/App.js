import './App.css';
import Product from './components/Product';
import Main from './components/Main';
import {Switch, Route} from 'react-router-dom'
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      
      <Switch>
        {/* {SHOW ONE} */}
        <Route exact path="/products/:id">
          <Product />
        </Route>
        {/* {HOME} */}
        <Route exact path="/">
          <Main />
        </Route>
        {/* {UPDATE} */}
        <Route exact path="/product/update/:id">
          <Update />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
