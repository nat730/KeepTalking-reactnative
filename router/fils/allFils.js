import { couperFil3 } from "./3fils";
import { couperFil4 } from "./4fils";
import { couperFil5 } from "./5fils";
import { couperFil6 } from "./6fils";

export default function couperFil(tableauWires) {
  const numberOfPickers = tableauWires.length;

  if (numberOfPickers === 3) {
    return couperFil3(tableauWires);
  }
  if (numberOfPickers === 4) {
    return couperFil4(tableauWires);
  }
  if (numberOfPickers === 5) {
    return couperFil5(tableauWires);
  }
  if (numberOfPickers === 6) {
    return couperFil6(tableauWires);
  }
}