interface Grid {
  coordinates: string[][];
}

interface GridResponse {
  grid: Grid;
  lettersAtCoordinates: string[];
}

export { Grid, GridResponse };
