export default function Input(props) {
  return (
    <input
      type="number"
      step="any"
      name={props.name}
      id={props.name}
      placeholder={props.name}
      value={props.value}
      onChange={props.onChange}
      {...props}
    />
  );
}
