function genSvar(name, answer) {
  return (
    <div>
      <b>{name}:</b> {answer.toFixed(3)}
    </div>
  );
}

function genTrigSvar(name, answer) {
  return `${name}: ${parseFloat(answer.toFixed(3))}${
    name.toLowerCase() !== name ? '°' : ''
  }`;
}

export { genSvar, genTrigSvar };
