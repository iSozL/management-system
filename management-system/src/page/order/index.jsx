import React from "react";
import { Link } from "react-router-dom";
import TableList from "../../utils/table-list/index";
const testList = [
  {
    orderNo: 1212323213123,
    receiverName: "李四",
    statusDesc: "未支付",
    payment: 12,
    createTime: "2019-07-20 17:54:28"
  },
  {
    orderNo: 1212323213123,
    receiverName: "李四",
    statusDesc: "未支付",
    payment: 12,
    createTime: "2019-07-20 17:54:28"
  },
  {
    orderNo: 1212323213123,
    receiverName: "李四",
    statusDesc: "未支付",
    payment: 12,
    createTime: "2019-07-20 17:54:28"
  }
];
class Order extends React.Component {
  render() {
    let tableHeads = [
      "订单号",
      "收件人",
      "订单状态",
      "订单总价",
      "创建时间",
      "操作"
    ];
    return (
      <div id="page-wrapper">
        {/* <PageTitle title="订单列表" />
        <ListSearch
          onSearch={orderNumber => {
            this.onSearch(orderNumber);
          }}
        /> */}
        <TableList tableHeads={tableHeads}>
          {testList.map((order, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/order/detail/${order.orderNo}`}>
                    {order.orderNo}
                  </Link>
                </td>
                <td>{order.receiverName}</td>
                <td>{order.statusDesc}</td>
                <td>￥{order.payment}</td>
                <td>{order.createTime}</td>
                <td>
                  <Link to={`/order/detail/${order.orderNo}`}>详情</Link>
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

export default Order;
