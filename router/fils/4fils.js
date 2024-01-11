export default function couperFil4(tableauWires, dernierChiffreNumeroSerie) {
    const numberOfPickers = tableauWires.length;
    const redCount = tableauWires.filter((color) => color === "red").length;
    const blueCount = tableauWires.filter((color) => color === "blue").length;
    const yellowCount = tableauWires.filter((color) => color === "yellow").length;
  
    if (redCount > 1 && dernierChiffreNumeroSerie % 2 !== 0) {
      return "Couper le dernier fil rouge.";
    } else if (
      (tableauWires[numberOfPickers - 1] === "jaune" && redCount === 0) ||
      blueCount === 1
    ) {
      return "Couper le premier fil.";
    } else if (yellowCount > 1) {
      return "Couper le dernier fil jaune.";
    } else {
      return "Couper le deuxième fil.";
    }
  }
  