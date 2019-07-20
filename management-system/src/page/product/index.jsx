import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
import TableList from "../../utils/table-list/index"
const testList = [
  {
    id: 1,
    name: 'test',
    subtitle: '西瓜',
    price: 15,
    status: 1
  },
  {
    id: 1,
    name: 'test',
    subtitle: '西瓜',
    price: 15,
    status: 1
  },
  {
    id: 1,
    name: 'test',
    subtitle: '西瓜',
    price: 15,
    status: 1
  }
];
class Product extends React.Component {
  render() {
    let tableHeads = [
      {name: '商品ID', width: '10%'},
      {name: '商品信息', width: '50%'},
      {name: '价格', width: '10%'},
      {name: '状态', width: '15%'},
      {name: '操作', width: '15%'},
    ];
    return (
      <div id="page-wrapper">
        <div title="商品列表">
          <div className="page-header-right">
            <Link to="/product/save" className="btn btn-primary">
              <i className="fa fa-plus" />
              <span>添加商品</span>
            </Link>
          </div>
        </div>
        {/* <ListSearch
          onSearch={(searchType, searchKeyword) => {
            this.onSearch(searchType, searchKeyword);
          }}
        /> */}
        <TableList tableHeads={tableHeads}>
          {testList.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>
                  <p>{product.name}</p>
                  <p>{product.subtitle}</p>
                </td>
                <td>￥{product.price}</td>
                <td>
                  <p>{product.status == 1 ? "在售" : "已下架"}</p>
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={e => {
                      this.onSetProductStatus(e, product.id, product.status);
                    }}
                  >
                    {product.status == 1 ? "下架" : "上架"}
                  </button>
                </td>
                <td>
                  <Link className="opear" to={`/product/detail/${product.id}`}>
                    详情
                  </Link>
                  <Link className="opear" to={`/product/save/${product.id}`}>
                    编辑
                  </Link>
                </td>
              </tr>
            );
          })}
        </TableList>
        {/* <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => this.onPageNumChange(pageNum)}
        /> */}
      </div>
    );
  }
}

export default Product;
