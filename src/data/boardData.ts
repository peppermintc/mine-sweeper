import { Board } from '../interfaces/interfaces';

export const MINE_COUNT = 30;
export const MINE_BOARD_ORIGINAL: Board = [
  ['none', 'mine', 'none', 'mine', 'mine', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'mine', 'none', 'none'],
  ['mine', 'none', 'mine', 'none', 'none', 'mine', 'none', 'mine'],
  ['none', 'mine', 'none', 'mine', 'mine', 'none', 'mine', 'none'],
  ['mine', 'none', 'mine', 'none', 'none', 'none', 'none', 'mine'],
  ['mine', 'mine', 'none', 'none', 'none', 'mine', 'mine', 'mine'],
  ['none', 'mine', 'none', 'mine', 'mine', 'none', 'mine', 'none'],
  ['none', 'none', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
];

// MINE_BOARD.forEach((row) => {
//   row.forEach((value) => value === 'mine' && console.count(value));
// });
