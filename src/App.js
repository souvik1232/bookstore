import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Login from './components/login/login'
import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Route path='/login' component={Login} />
          </div>
        </Router>
    </div>
  );
}

export default App;
