import React from "react";
import "../layout/theme.css";
import TopNav from "../navBar";
import SideNav from "../sideBar";
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
