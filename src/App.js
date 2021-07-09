import './App.css';
import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { About } from './components/About';
import { Course } from './components/Course';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route  exact path ='/'>
            <Courses />
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route path='/course/:id'>
            <Course />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
