import { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import MineBoard from './components/MineBoard';
import { MINE_BOARD_ORIGINAL } from './data/boardData';
import { Board, GameState } from './interfaces/interfaces';

const MineSweeperPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [gameState, setGameState] = useState<GameState>('PLAYING');
  const [mineBoard, setMineBoard] = useState<Board>();

  const updateMineBoard = (newMineBoard: Board) => setMineBoard(newMineBoard);
  const updateGameState = (newGameState: GameState) =>
    setGameState(newGameState);

  useLayoutEffect(() => {
    const copyAndInitMineBoard = () => {
      const newMineBoard: Board = [];
      MINE_BOARD_ORIGINAL.forEach((mineBoardRow) =>
        newMineBoard.push([...mineBoardRow]),
      );

      setMineBoard(newMineBoard);
    };

    copyAndInitMineBoard();
  }, []);

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);

  return (
    <MineSweeperPage>
      {mineBoard && (
        <MineBoard
          mineBoard={mineBoard}
          updateMineBoard={updateMineBoard}
          updateGameState={updateGameState}
        />
      )}
      {!mineBoard && 'Loading Mine Board...'}
    </MineSweeperPage>
  );
};

export default App;
