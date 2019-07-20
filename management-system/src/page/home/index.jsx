import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
class Home extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        {/* <PageTitle title="首页" /> */}
        <div style={{marginBottom:20, marginTop: 10}}>
          <span style={{fontSize: 35}}>首页</span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to="/user" className="color-box brown">
              <p className="count">998</p>
              <p className="desc">
                <i className="fa fa-user-o" />
                <span>用户总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/product" className="color-box green">
              <p className="count">997</p>
              <p className="desc">
                <i className="fa fa-list" />
                <span>商品总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/order" className="color-box blue">
              <p className="count">996</p>
              <p className="desc">
                <i className="fa fa-check-square-o" />
                <span>订单总数</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
