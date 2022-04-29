export type GameState = 'GAME_OVER' | 'COMPLETE' | 'PLAYING';
export type CellState = 'none' | 'mine' | 'flag' | number;
export type Board = CellState[][];

export interface PositionInfo {
  row: number;
  column: number;
}
