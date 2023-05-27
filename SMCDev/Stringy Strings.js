function stringy(size) {
    let stringy = '';
    for (let i = 1; i <= size; i++) {
      stringy = stringy + i%2
    }
    return stringy;
  }