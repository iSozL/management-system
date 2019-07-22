import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Home from "./page/home/index";
import Layout from "./component/layout/index";
import Product from "./page/product/index";
import Order from "./page/order/index";
import User from "./page/user/index"
import Login from "./page/login/index"
class App extends React.Component {
  render() {
    let OtherPage = (
      <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/order" component={Order} />
          <Route path="/user" component={User} />
      </Layout>
    )
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => OtherPage} />
        </Switch>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
