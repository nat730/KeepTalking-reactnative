export function couperFil3(tableauWires) {
  const redCount = tableauWires.filter((color) => color === "red").length;
  const blueCount = tableauWires.filter((color) => color === "blue").length;
  console.log(tableauWires);
  console.log(redCount, "red");
  console.log(blueCount, "blue");

  if (redCount === 0) {
    console.log(tableauWires, "fzzf");
    return "Couper le deuxième fil.";
  } else if (blueCount > 1) {
    return "Couper le dernier fil bleu.";
  } else {
    return "Couper le dernier fil.";
  }
}
