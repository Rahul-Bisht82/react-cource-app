import React from "react";
import Header from "./Header";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Allcource from "./Allcource";
import Addcources from "./Addcources";
import Menus from "./Menus";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Contact from "./Contact";
import Cources from "./Cources";
import Menu2 from "./Menu2";
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <Menus />
          </div>
          <div className="col-md-8">
            <Menu2 />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/addcources" component={Addcources} />
              <Route exact path="/allcource" component={Allcource} />
              <Route exact path="/about" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
