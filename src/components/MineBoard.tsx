import styled from 'styled-components';
import { Board } from '../interfaces/interfaces';
import Cell from './Cell';

interface MineBoardProps {
  mineBoard: Board;
  updateMineBoard: (newMineBoard: Board) => void;
}

const MineBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border: 1px solid black;
`;

const MineBoard = ({ mineBoard, updateMineBoard }: MineBoardProps) => {
  const renderMineBoard = (): React.ReactNode[] => {
    const result: React.ReactNode[] = [];

    mineBoard.forEach((row, index) => {
      const rowIndex = index;

      row.forEach((cellState, index) => {
        const columnIndex = index;

        result.push(
          <Cell
            key={`${rowIndex}/${columnIndex}`}
            cellState={cellState}
            positionInfo={{
              row: rowIndex,
              column: columnIndex,
            }}
            mineBoard={mineBoard}
            updateMineBoard={updateMineBoard}
          />,
        );
      });
    });

    return result;
  };

  return <MineBoardContainer>{renderMineBoard()}</MineBoardContainer>;
};

export default MineBoard;
