import {couperFil3} from "./3fils"; //export default sans accolade et nom qu'on veut
import {couperFil4} from "./4fils"; //export const avec accolade et meme nom.
import {couperFil5} from "./5fils";
import {couperFil6} from "./6fils";

export function couperFil(tableauWires,dernierChiffreNumeroSerie) {
  const numberOfPickers = tableauWires.length;

  if (numberOfPickers === 3) {
    return couperFil3(tableauWires);
  }
  if (numberOfPickers === 4) {
    return couperFil4(tableauWires,dernierChiffreNumeroSerie);
  }
  if (numberOfPickers === 5) {
    return couperFil5(tableauWires,dernierChiffreNumeroSerie);
  }
  if (numberOfPickers === 6) {
    return couperFil6(tableauWires,dernierChiffreNumeroSerie);
  }
}