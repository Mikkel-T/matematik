export default function Input(props) {
  return (
    <input
      type="text"
      name={props.name}
      id={props.name}
      placeholder={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
