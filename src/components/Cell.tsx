import styled from 'styled-components';
import { CellState, PositionInfo } from '../interfaces/interfaces';

interface CellProps {
  cellState: CellState;
  positionInfo: PositionInfo;
  mineBoard: CellState[][];
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

const Cell = ({ cellState, positionInfo, mineBoard }: CellProps) => {
  const onCellClick = () => {
    console.log('cellClick', cellState, positionInfo, mineBoard);
  };

  return <CellContainer onClick={onCellClick}>{cellState}</CellContainer>;
};

export default Cell;
