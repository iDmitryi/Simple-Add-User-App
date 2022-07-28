import "./Input.css";

const Input = (props) => {
  return (
    <div className="form-item-input">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        name={props.label}
        onChange={(e) => props.onChangeInput(e.target.value)}
        min={props.min}
        max={props.max}
      />
      <br />
    </div>
  );
};

export default Input;
