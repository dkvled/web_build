import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

import Header from './Header'; //밑에 3개 같이 사용
import PostFilter from './PostFilter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return ( 
    <Router>
      <div >
        <Header/>
        <Switch>
          <Route exact path="/">
            <PostFilter/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>  
          <Route exact path="/profile">
            <Profile/>
          </Route>        
        </Switch>
      </div>
    </Router>
  );
}

export default App;