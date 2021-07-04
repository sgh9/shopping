import './App.css';
import Home from './imports/Home';
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import ProductDetails from './imports/ProductDetails';

function App() {
  return (
    <Switch>
          <Route path="/product/:productId">
              <ProductDetails/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
  )
}

export default App;
