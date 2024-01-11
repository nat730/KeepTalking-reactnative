export default function couperFil3(tableauWires) {
    const numberOfPickers = tableauWires.length;
    const redCount = tableauWires.filter((color) => color === "red").length;
  
      if (redCount === 3) {
        return "Couper le deuxième fil.";
      } else {
        const blueCount = tableauWires.filter((color) => color === "blue").length;
        if (blueCount > 1) {
          return "Couper le dernier fil bleu.";
        } else {
          return "Couper le dernier fil.";
        }
      }
    }
  
  