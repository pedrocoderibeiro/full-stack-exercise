interface Grid {
  coordinates: string[][];
}

interface GridResponse {
  grid: Grid;
  liveCode: number;
}

export { Grid, GridResponse };
