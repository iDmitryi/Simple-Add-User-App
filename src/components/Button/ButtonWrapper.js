import { Button } from "antd";

const ButtonWrapper = (props) => {
  const onClickHandler = () => {
    if (props.onClick !== undefined) {
      props.onClick(props);
    }

    // props.onClick(props);
  };
  return (
    <Button
      type={props.type}
      key={props.key}
      htmlType={props.htmlType}
      size={props.size}
      onClick={onClickHandler}
    >
      {props.children}
    </Button>
  );
};

export default ButtonWrapper;
