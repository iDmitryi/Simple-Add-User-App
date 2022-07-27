import { Table } from "antd";
import ButtonAnt from "./Button";
const { Column } = Table;

const UserList = (props) => {
  const onDeleteHandler = (record) => {
    props.deleteUser(record);
  };

  return (
    <Table dataSource={props.newUser} pagination={false}>
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column
        title="Action"
        key="action"
        align="center"
        render={(_, record) => (
          <ButtonAnt
            type="danger"
            record={record.key}
            onClick={onDeleteHandler}
          >
            Delete
          </ButtonAnt>
        )}
      />
    </Table>
  );
};

export default UserList;
