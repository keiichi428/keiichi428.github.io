
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
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
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* Page switches */}

        <Switch>
          <Route path="/:id" children={<Child />} />
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <Project path={id} />
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
