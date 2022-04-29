import {
  MINE_BOARD_ORIGINAL,
  MINE_COUNT,
  TOTAL_CELL_COUNT,
} from '../data/boardData';
import { CellState, Board, PositionInfo } from '../interfaces/interfaces';

const foundAllNone = (mineBoard: Board): boolean => {
  let numberCount: number = 0;
  mineBoard.forEach((row) =>
    row.forEach((cellState) => typeof cellState === 'number' && numberCount++),
  );

  if (numberCount === TOTAL_CELL_COUNT - MINE_COUNT) return true;
  else return false;
};

const foundAllMine = (mineBoard: Board): boolean => {
  let correctflagCount: number = 0;
  mineBoard.forEach((row, index) => {
    const rowIndex = index;
    row.forEach((cellState, index) => {
      const columnIndex = index;
      if (
        MINE_BOARD_ORIGINAL[rowIndex][columnIndex] === 'mine' &&
        cellState === 'flag'
      ) {
        correctflagCount++;
      }
    });
  });

  if (correctflagCount === MINE_COUNT) return true;
  else return false;
};

export const checkComplete = { foundAllNone, foundAllMine };

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

const noneToNumber = (
  mineBoard: Board,
  positionInfo: PositionInfo,
  mineCountAroundCell: number,
): Board => {
  const newMineBoard: Board = [];
  const { row, column } = positionInfo;

  mineBoard.forEach((prevRow, index) => {
    if (index !== row) return newMineBoard.push(prevRow);
    if (index === row) {
      const newRow: CellState[] = prevRow.map((prevCell, index) => {
        if (index !== column) return prevCell;
        else return mineCountAroundCell;
      });
      newMineBoard.push(newRow);
      return;
    }
  });

  return newMineBoard;
};

const somethingToFlag = (
  mineBoard: Board,
  positionInfo: PositionInfo,
): Board => {
  const newMineBoard: Board = [];
  const { row, column } = positionInfo;

  mineBoard.forEach((prevRow, index) => {
    if (index !== row) return newMineBoard.push(prevRow);
    if (index === row) {
      const newRow: CellState[] = prevRow.map((prevCell, index) => {
        if (index !== column) return prevCell;
        else return 'flag';
      });
      newMineBoard.push(newRow);
      return;
    }
  });

  return newMineBoard;
};

const flagToSomething = (
  mineBoard: Board,
  positionInfo: PositionInfo,
): Board => {
  const newMineBoard: Board = [];
  const { row, column } = positionInfo;

  mineBoard.forEach((prevRow, index) => {
    if (index !== row) return newMineBoard.push(prevRow);
    if (index === row) {
      const newRow: CellState[] = prevRow.map((prevCell, index) => {
        if (index !== column) return prevCell;
        else return MINE_BOARD_ORIGINAL[row][column];
      });
      newMineBoard.push(newRow);
      return;
    }
  });

  return newMineBoard;
};

export const createNewMineBoard = {
  noneToNumber,
  somethingToFlag,
  flagToSomething,
};
