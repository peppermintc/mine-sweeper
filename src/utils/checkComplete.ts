import {
  MINE_BOARD_ORIGINAL,
  MINE_COUNT,
  TOTAL_CELL_COUNT,
} from '../data/boardData';
import { Board } from '../interfaces';

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
