import { MouseEvent } from 'react';
import styled from 'styled-components';
import { CellState, Board, PositionInfo, GameState } from '../interfaces';
import { createNewMineBoard } from '../utils/createNewMineBoard';
import { countMineAround } from '../utils/countMineAround';
import RedFlag from '../img/redFlag.png';

interface CellProps {
  cellState: CellState;
  positionInfo: PositionInfo;
  mineBoard: Board;
  mineCount: number;
  updateMineBoard: (newMineBoard: Board) => void;
  updateGameState: (newGameState: GameState) => void;
  updateMineCount: (newMineCount: number) => void;
}

const CellContainer = styled.div<{ isNumber: boolean; isFlag: boolean }>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isNumber, isFlag }) => {
    if (isNumber) return 'lightyellow';
    if (isFlag) return 'lightgreen';
    else return 'white';
  }};
  &:hover {
    background-color: lightgray;
  }
`;

const Cell = ({
  cellState,
  positionInfo,
  mineBoard,
  mineCount,
  updateMineBoard,
  updateGameState,
  updateMineCount,
}: CellProps) => {
  const onCellClick = () => {
    if (cellState === 'flag' || typeof cellState === 'number') return;

    if (cellState === 'mine') {
      updateGameState('GAME_OVER');
      return;
    }

    if (cellState === 'none') {
      const mineCountAroundCell = countMineAround(positionInfo);
      const newMineBoard: Board = createNewMineBoard.noneToNumber(
        mineBoard,
        positionInfo,
        mineCountAroundCell,
      );
      updateMineBoard(newMineBoard);
      return;
    }
  };

  const onCellRightClick = (e: MouseEvent) => {
    e.preventDefault();

    if (typeof cellState === 'number') return;

    if (cellState === 'none' || cellState === 'mine') {
      if (mineCount - 1 < 0) return;

      const newMineBoard: Board = createNewMineBoard.somethingToFlag(
        mineBoard,
        positionInfo,
      );
      updateMineBoard(newMineBoard);
      updateMineCount(mineCount - 1);
      return;
    }

    if (cellState === 'flag') {
      const newMineBoard: Board = createNewMineBoard.flagToSomething(
        mineBoard,
        positionInfo,
      );
      updateMineBoard(newMineBoard);
      updateMineCount(mineCount + 1);
      return;
    }
  };

  const renderCellState = () => {
    if (cellState === 0) return '';
    if (typeof cellState === 'number') return cellState;
    if (cellState === 'mine' || cellState === 'none') return '';
    if (cellState === 'flag') return <img src={RedFlag} alt="flag" />;
  };

  return (
    <CellContainer
      onClick={onCellClick}
      onContextMenu={onCellRightClick}
      isNumber={typeof cellState === 'number'}
      isFlag={cellState === 'flag'}
    >
      {renderCellState()}
    </CellContainer>
  );
};

export default Cell;
