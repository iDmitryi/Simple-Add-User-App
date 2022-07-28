import { Table } from "antd";
import ButtonWrapper from "../Button/ButtonWrapper";

const { Column } = Table;

const UserList = (props) => {
  const onDeleteHandler = (record) => {
    // pass key to parent
    props.deleteUser(record);
  };

  return (
    <Table dataSource={props.newUser} pagination={{ pageSize: 7 }}>
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column
        title="Action"
        key="action"
        align="center"
        render={(_, record) => (
          <ButtonWrapper
            type="danger"
            record={record.key}
            onClick={onDeleteHandler}
          >
            Delete
          </ButtonWrapper>
        )}
      />
    </Table>
  );
};

export default UserList;
