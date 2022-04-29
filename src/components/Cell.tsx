import styled from 'styled-components';
import { CellState, Board, PositionInfo } from '../interfaces/interfaces';
import { countMineAround, createNewMineBoard } from '../utils';

interface CellProps {
  cellState: CellState;
  positionInfo: PositionInfo;
  mineBoard: Board;
  updateMineBoard: (newMineBoard: Board) => void;
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
}: CellProps) => {
  const onCellClick = () => {
    if (cellState === 'flag' || typeof cellState === 'number') return;
    if (cellState === 'mine') return console.log('game over');
    if (cellState === 'none') {
      const mineCountAroundCell = countMineAround(positionInfo);
      const newMineBoard: Board = createNewMineBoard(
        mineBoard,
        positionInfo,
        mineCountAroundCell,
      );
      updateMineBoard(newMineBoard);
    }
  };

  return <CellContainer onClick={onCellClick}>{cellState}</CellContainer>;
};

export default Cell;
