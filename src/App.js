import "./App.css";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Allusers from "./components/Allusers";
import Edituser from "./components/users/Edituser";
import Viewuser from "./components/users/Viewuser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path="/testimonial" component={Testimonial} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={Allusers} />
          <Route exact path="/users/edit/:id" component={Edituser} />
          <Route exact path="/users/view/:id" component={Viewuser} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
