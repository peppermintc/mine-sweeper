import { MINE_BOARD_ORIGINAL } from '../data/boardData';
import { CellState, PositionInfo } from '../interfaces';

export const countMineAround = (positionInfo: PositionInfo): number => {
  const { row, column } = positionInfo;

  const SELECTED_ROWS = [];
  const UPPER_ROW = MINE_BOARD_ORIGINAL[row - 1];
  const CENTER_ROW = MINE_BOARD_ORIGINAL[row];
  const BOTTOM_ROW = MINE_BOARD_ORIGINAL[row + 1];
  SELECTED_ROWS.push(UPPER_ROW);
  SELECTED_ROWS.push(CENTER_ROW);
  SELECTED_ROWS.push(BOTTOM_ROW);

  const AROUND_VALUES: CellState[] = [];
  SELECTED_ROWS.forEach((selectedRow) => {
    if (selectedRow === undefined) return;

    const LEFT_COLUMN = selectedRow[column - 1];
    const CENTER_COLUMN = selectedRow[column];
    const RIGHT_COLUMN = selectedRow[column + 1];
    AROUND_VALUES.push(LEFT_COLUMN);
    AROUND_VALUES.push(CENTER_COLUMN);
    AROUND_VALUES.push(RIGHT_COLUMN);
  });

  const MINE_COUNT = AROUND_VALUES.filter((value) => value === 'mine').length;
  return MINE_COUNT;
};
