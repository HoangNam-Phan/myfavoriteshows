import { Route, Switch, Link } from 'react-router-dom'

// COMPONENTS
import Main from './components/Main'
import Create from './components/Create'
import Lists from './components/Lists'
import Search from './components/Search'
import ListDetails from './components/ListDetails'

import './App.css';


function App() {
  return (
    <div className='body'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            MyFavoriteSeries
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/create' className="nav-link active" aria-current="page">
                  Create List
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/lists' className="nav-link active" aria-current="page">
                  Lists
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/search' className="nav-link active" aria-current="page">
                  Search Show
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/lists' component={Lists} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/lists/:id' component={ListDetails} />
      </Switch>
    </div>
  );
}

export default App;
