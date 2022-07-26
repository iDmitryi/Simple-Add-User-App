import { useState } from "react";

import { Table, Space, Button } from "antd";
const { Column } = Table;

const UserList = (props) => {
  return (
    <Table dataSource={props.newUser} pagination={false}>
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column
        title="Action"
        key="action"
        align="center"
        render={(_, record) => (
          <Button type="danger" onClick={props.deleteUser}>
            Delete
          </Button>
        )}
      />
    </Table>
  );
};

export default UserList;
