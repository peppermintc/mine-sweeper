import { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import GameOverModal from './components/GameOverModal';
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
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);

  const updateMineBoard = (newMineBoard: Board) => setMineBoard(newMineBoard);
  const updateGameState = (newGameState: GameState) =>
    setGameState(newGameState);

  const copyAndResetMineBoard = () => {
    const newMineBoard: Board = [];
    MINE_BOARD_ORIGINAL.forEach((mineBoardRow) =>
      newMineBoard.push([...mineBoardRow]),
    );
    setMineBoard(newMineBoard);
  };

  useLayoutEffect(() => {
    copyAndResetMineBoard();
  }, []);

  useEffect(() => {
    if (gameState === 'COMPLETE') {
      console.log('show complete modal');
      return;
    }
    if (gameState === 'GAME_OVER') {
      setShowGameOverModal(true);
      return;
    }
    if (gameState === 'PLAYING') {
      setShowGameOverModal(false);
      copyAndResetMineBoard();
      return;
    }
  }, [gameState]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setGameState('PLAYING');
  //   }, 3000);
  // }, []);

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
      {showGameOverModal && <GameOverModal updateGameState={updateGameState} />}
    </MineSweeperPage>
  );
};

export default App;
