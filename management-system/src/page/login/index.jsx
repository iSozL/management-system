import React from "react";
import axios from "axios";
import ReactDom from "react-dom";
import "./index.scss";
import { stringify } from "querystring";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "admin"
    };
  }
  setUsername(e) {
    let _this = this;
    _this.setState({
      username: e.target.value
    });
  }
  setPassword(e) {
    let _this = this;
    _this.setState({
      password: e.target.value
    });
  }
  onSubmit() {
    let jsonData = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(
        "http://adminv2.happymmall.com/manage/user/login.do", stringify(jsonData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }
      )
      .then(function(res) {
        console.log(res);
        if (res.data.status === 0) {
          console.log("跳转")
          window.location.href = '/'
        }
      });
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="请输入用户名"
                  value={this.state.username}
                  onChange={this.setUsername.bind(this)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="请输入密码"
                  value={this.state.password}
                  onChange={this.setPassword.bind(this)}
                />
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={() => {
                  this.onSubmit();
                }}
              >
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
