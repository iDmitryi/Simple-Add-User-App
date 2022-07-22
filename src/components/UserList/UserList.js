import { Table, Space, Button } from "antd";
const { Column } = Table;

const data = [
  {
    key: "1",
    username: "John",
    age: 32,
  },
  {
    key: "2",
    username: "Jim",
    age: 42,
  },
  {
    key: "3",
    username: "Joe",
    age: 32,
  },
  {
    key: "4",
    username: "Man",
    age: 22,
  },
];

const UserList = (props) => {
  return (
    <Table dataSource={data} pagination={false}>
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column
        title="Action"
        key="action"
        align="center"
        render={(_, record) => (
          <Button type="danger">Delete {record.username}</Button>
        )}
      />
    </Table>
  );
};

export default UserList;
