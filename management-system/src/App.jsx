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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
