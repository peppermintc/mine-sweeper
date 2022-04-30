import { MINE_BOARD_ORIGINAL } from '../data/boardData';
import { CellState, Board, PositionInfo } from '../interfaces';

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
