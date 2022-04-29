import { Board } from '../interfaces/interfaces';

export const TOTAL_CELL_COUNT = 64;

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

// 테스트 셋 1
// export const MINE_COUNT = 61;
// export const MINE_BOARD_ORIGINAL: Board = [
//   ['none', 'none', 'none', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
//   ['mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine', 'mine'],
// ];

// 테스트 셋 2
// export const MINE_COUNT = 3;
// export const MINE_BOARD_ORIGINAL: Board = [
//   ['mine', 'mine', 'mine', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
//   ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
// ];
