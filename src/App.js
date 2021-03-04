
import './App.css';
import Productpage from './Composants/Productpage';
import Navbar from './Composants/Navbar';
import Chekoutpage from './Composants/Chekoutpage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Fortnitestore from './Composants/Fotnitestore';
import Homepage from './Composants/Homepage';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>

          <Route exact path = "/">
            <Homepage/>
          </Route>

          <Route exact path = "/Productpage">
            <Productpage/>
          </Route>

          <Route exact path = "/Checkout">
            <Chekoutpage/>
          </Route>

          <Route exact path = "/fortnite">
            <Fortnitestore/>
          </Route>
          
          <Route >
              <h1 
              style={{ fontSize:'80px', display:'block', marginLeft:'50vw', marginTop:'50vh',
                        transform: 'translateX(-50%) translateY(-180%)'}}
              >Page not found: Error 404</h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
