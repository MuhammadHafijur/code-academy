import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Admissions from './Components/Admissions/Admissions';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admission">
            <Admissions></Admissions>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* Footer */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
