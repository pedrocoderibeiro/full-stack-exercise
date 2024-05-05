import { Grid, GridResponse } from "@models/grid";
import { CodeService } from "@services/code/code.service";
import { TimeService } from "@services/time/time.service";

export class GridService {
  private timeService: TimeService;
  private codeService: CodeService;

  constructor() {
    this.timeService = new TimeService();
    this.codeService = new CodeService();
  }

  generateGrid(letter?: string): GridResponse {
    const currentTime = this.timeService.getCurrentSecondLastTwoDigits(); // Get the last two digits of the current system time
    const firstCoordinate = [Math.floor(currentTime / 10), currentTime % 10]; // Convert the last two digits into coordinates [row, column]
    const secondCoordinate = [currentTime % 10, Math.floor(currentTime / 10)]; // Swap row and column for the second coordinate
    const totalCells = 100; // Total number of cells in a 10x10 grid
    const cellsWithLetter = Math.ceil(totalCells * 0.2); // Number of cells with the specified letter
    const lettersPool = Array.from({ length: 26 }, (_, index) =>
      String.fromCharCode(97 + index)
    ); // Array of all letters

    // Remove the specified letter from the pool if provided
    if (letter) {
      const letterIndex = letter.charCodeAt(0) - 97;
      lettersPool.splice(letterIndex, 1);
    }

    // Fill 20% of the grid with the specified letter
    const grid: Grid = {
      coordinates: Array.from({ length: 10 }, () =>
        Array.from({ length: 10 }, (_, columnIndex) => {
          if (columnIndex < cellsWithLetter / 10) {
            return letter || ""; // Use the specified letter if provided, otherwise an empty string
          } else {
            return "";
          }
        })
      ),
    };

    // Fill the remaining 80% of the grid with random letters from the pool
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (grid.coordinates[row][col] === "") {
          const randomIndex = Math.floor(Math.random() * lettersPool.length);
          grid.coordinates[row][col] = lettersPool[randomIndex];
        }
      }
    }

    // Look up the letters at the coordinates
    const lettersAtCoordinates = [
      grid.coordinates[firstCoordinate[0]][firstCoordinate[1]],
      grid.coordinates[secondCoordinate[0]][secondCoordinate[1]],
    ];

    // Shuffle the grid
    grid.coordinates = grid.coordinates.map((row: string[]) => {
      return row.sort(() => Math.random() - 0.5);
    });

    const liveCode = this.codeService.generateCode(grid, lettersAtCoordinates);

    return { grid, liveCode };
  }
}
