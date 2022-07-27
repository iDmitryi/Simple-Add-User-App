import { Button } from "antd";

const ButtonAnt = (props) => {
  const deleteHandler = () => {
    props.onClick(props);
  };
  return (
    <Button type={props.type} key={props.key} onClick={deleteHandler}>
      {props.children}
    </Button>
  );
};

export default ButtonAnt;
