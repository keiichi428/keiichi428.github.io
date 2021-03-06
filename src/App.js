
import './App.css';
// import Header from './components/Header'
import Home from './components/Home'
import Stories from './components/Stories'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="home">
                <span className="material-icons">home</span></Link>
            </li>
            <li>
              <Link to="/" className="contact">
                <span className="material-icons">chat</span></Link>
            </li>
            <li>
              <Link to="/" className="me">
                <span className="material-icons">face</span></Link>
            </li>
            
          </ul>
        </nav>

        {/* Page switches */}

        <Home />
        <Switch>
          <Route path="/stories/:id" children={<Child />} />
          <Route path="/" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}



/**
 * Everything other than Home
 * @returns 
 */
function Child() {
  let { id } = useParams();
  console.log(id)
  return (
    <div>
      <Stories path={id}  />
    </div>
  )
}


/**
 * 404
 * @returns 
 */
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
