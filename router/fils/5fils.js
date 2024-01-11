export function couperFil5(tableauWires, dernierChiffreNumeroSerie) {
    const numberOfPickers = tableauWires.length;
    const blackCount = tableauWires.filter((color) => color === "black").length;
    const redCount = tableauWires.filter((color) => color === "red").length;
    const yellowCount = tableauWires.filter((color) => color === "yellow").length;
  
      if (tableauWires[numberOfPickers - 1] === "noir" && dernierChiffreNumeroSerie % 2 !== 0) {
        return "Couper le quatrième fil.";
      } else if (redCount === 1 && yellowCount > 1) {
        return "Couper le premier fil.";
      } else if (!blackCount) {
        return "Couper le deuxième fil.";
      } else {
        return "Couper le premier fil.";
      }
    }
  