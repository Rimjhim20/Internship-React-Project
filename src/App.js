import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// Pages
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./styles/index.css"
// Components
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to="/"></Redirect>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
