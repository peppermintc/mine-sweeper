import styled from 'styled-components';
import { Board, GameState } from '../interfaces/interfaces';
import Cell from './Cell';

interface MineBoardProps {
  mineBoard: Board;
  mineCount: number;
  gameState: GameState;
  updateMineBoard: (newMineBoard: Board) => void;
  updateGameState: (newGameState: GameState) => void;
  updateMineCount: (newMineCount: number) => void;
}

const MineBoardContainer = styled.div<{ disabled: boolean }>`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border: 1px solid black;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const MineBoard = ({
  mineBoard,
  mineCount,
  gameState,
  updateMineBoard,
  updateGameState,
  updateMineCount,
}: MineBoardProps) => {
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
            mineCount={mineCount}
            updateMineBoard={updateMineBoard}
            updateGameState={updateGameState}
            updateMineCount={updateMineCount}
          />,
        );
      });
    });

    return result;
  };

  return (
    <MineBoardContainer disabled={gameState !== 'PLAYING'}>
      {renderMineBoard()}
    </MineBoardContainer>
  );
};

export default MineBoard;
