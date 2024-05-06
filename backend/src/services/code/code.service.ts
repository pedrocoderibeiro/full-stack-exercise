import { Grid } from "@models/grid";

export class CodeService {
  constructor() {}

  generateCode(grid: Grid, letterCombination: string[]): number {
    const letterCount: Record<string, number> = {};

    // Count occurrences of each letter in the grid
    for (let row of grid.coordinates) {
      for (let letter of row) {
        if (letterCombination.includes(letter)) {
          if (!letterCount[letter]) {
            letterCount[letter] = 0;
          }
          letterCount[letter]++;
        }
      }
    }

    // Handle exception for counts larger than 9
    for (let letter in letterCount) {
      if (letterCount[letter] > 9) {
        letterCount[letter] = Math.ceil(letterCount[letter] / 9); // Divide by the lowest integer possible to get a value <= 9
      }
    }

    let numberString = "";

    // Concatenate counts of letters
    for (let letter of letterCombination) {
      if (letterCount[letter] !== undefined) {
        numberString += letterCount[letter];
      }
    }

    return parseInt(numberString);
  }
}
