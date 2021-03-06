import React from "react";
import { Link } from "react-router-dom";
class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <div className="navbar-brand">
            <b>Admin</b>System
          </div>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              {/* <i className="fa fa-user fa-fw" />
              {this.state.username ? (
                <span>欢迎，{this.state.username}</span>
              ) : (
                <span>欢迎您</span>
              )}
              <i className="fa fa-caret-down" /> */}
              <i className="fa fa-user fa-fw" />
              <span>欢迎, 李四</span>
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                {/* <a
                  onClick={() => {
                    this.onLogout();
                  }}
                >
                  <i className="fa fa-sign-out fa-fw" />
                  <span>退出登录</span>
                </a> */}
                <a>
                  <i className="fa fa-sign-out fa-fw" />
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNav;
