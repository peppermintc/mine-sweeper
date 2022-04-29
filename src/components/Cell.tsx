import { MouseEvent } from 'react';
import styled from 'styled-components';
import {
  CellState,
  Board,
  PositionInfo,
  GameState,
} from '../interfaces/interfaces';
import { countMineAround, createNewMineBoard } from '../utils';

interface CellProps {
  cellState: CellState;
  positionInfo: PositionInfo;
  mineBoard: Board;
  updateMineBoard: (newMineBoard: Board) => void;
  updateGameState: (newGameState: GameState) => void;
}

const CellContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: lightgray;
  }
`;

const Cell = ({
  cellState,
  positionInfo,
  mineBoard,
  updateMineBoard,
  updateGameState,
}: CellProps) => {
  const onCellClick = () => {
    if (cellState === 'flag' || typeof cellState === 'number') return;
    if (cellState === 'mine') updateGameState('GAME_OVER');
    if (cellState === 'none') {
      const mineCountAroundCell = countMineAround(positionInfo);
      const newMineBoard: Board = createNewMineBoard.noneToNumber(
        mineBoard,
        positionInfo,
        mineCountAroundCell,
      );
      updateMineBoard(newMineBoard);
    }
  };

  const onCellRightClick = (e: MouseEvent) => {
    e.preventDefault();

    if (typeof cellState === 'number') return;
    if (cellState === 'none') {
      return console.log('none > flag');
    }
    if (cellState === 'mine') return console.log('mine > flag');
    if (cellState === 'flag') return console.log('flag > originalState');
  };

  return (
    <CellContainer onClick={onCellClick} onContextMenu={onCellRightClick}>
      {cellState}
    </CellContainer>
  );
};

export default Cell;
