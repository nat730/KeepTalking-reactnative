export function couperFil6(tableauWires, dernierChiffreNumeroSerie) {
    const yellowCount = tableauWires.filter((color) => color === "yellow").length;
    const whiteCount = tableauWires.filter((color) => color === "white").length;
    const redCount = tableauWires.filter((color) => color === "red").length;
  
      if (!yellowCount && dernierChiffreNumeroSerie % 2 !== 0) {
        return "Couper le troisième fil.";
      } else if (yellowCount === 1 && whiteCount > 1) {
        return "Couper le quatrième fil.";
      } else if (!redCount) {
        return "Couper le dernier fil.";
      } else {
        return "Couper le quatrième fil.";
      }
    }
  