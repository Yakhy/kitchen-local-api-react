import './App.css'
import './media/Media.css'
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Nabvar/Navbar';
import Home from './page/home/Home';
import Create from './page/create/Create';
import Reciepe from './page/reciepe/Reciepe';
import Search from './page/search/Search';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/create">
            <Create/>
          </Route>
          <Route  path="/recipes/:id">
            <Reciepe/>
          </Route>
          <Route  path="/search">
            <Search/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
