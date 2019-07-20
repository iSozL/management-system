import React from "react";
import { Link } from "react-router-dom";
import TableList from "../../utils/table-list/index";

const testList = [
  {
    id: 1,
    username: "王五",
    email: "test@qq.com",
    phone: "1008611"
  },
  {
    id: 1,
    username: "王五",
    email: "test@qq.com",
    phone: "1008611"
  },
  {
    id: 1,
    username: "王五",
    email: "test@qq.com",
    phone: "1008611"
  }
];
class User extends React.Component {
  render() {
    let listBody = testList.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      );
    });
    return (
      <div id="page-wrapper">
        {/* <PageTitle title="用户列表" /> */}
        <TableList tableHeads={["ID", "用户名", "邮箱", "电话", "注册时间"]}>
          {listBody}
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

export default User;
