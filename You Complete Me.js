const complete = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i) == [...str.slice(i)].reverse().join(""))
      return str + [...str.slice(0, i)].reverse().join("");
  }
};
