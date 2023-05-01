// this function is used by `Plop.js`

function snakeToCamel(str) {
  return str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
}

export default snakeToCamel;
