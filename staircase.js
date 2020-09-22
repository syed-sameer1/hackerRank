function staircase(n) {
  let shape = "";
  for (let i = n; i > 0; i--) {
    let space = "";

    for (let j = i; j > 1; j--) {
      space += " ";
    }
    shape += "#";
    return space + shape;
  }
}
staircase(6);
