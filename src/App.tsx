import { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import CompleteModal from './components/CompleteModal';
import GameOverModal from './components/GameOverModal';
import MineBoard from './components/MineBoard';
import MineCount from './components/MineCount';
import { MINE_BOARD_ORIGINAL, MINE_COUNT } from './data/boardData';
import { Board, GameState } from './interfaces/interfaces';
import { checkComplete } from './utils';

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
  const [mineCount, setMineCount] = useState<number>(MINE_COUNT);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);
  const [showCompleteModal, setShowCompleteModal] = useState<boolean>(false);

  const updateMineBoard = (newMineBoard: Board) => setMineBoard(newMineBoard);
  const updateMineCount = (newMineCount: number) => setMineCount(newMineCount);
  const updateGameState = (newGameState: GameState) =>
    setGameState(newGameState);

  const closeAllModal = () => {
    setShowCompleteModal(false);
    setShowGameOverModal(false);
  };

  const copyAndResetGame = () => {
    const newMineBoard: Board = [];
    MINE_BOARD_ORIGINAL.forEach((mineBoardRow) =>
      newMineBoard.push([...mineBoardRow]),
    );
    setMineBoard(newMineBoard);
    setMineCount(MINE_COUNT);
  };

  const onResetButtonClick = () => {
    closeAllModal();
    copyAndResetGame();
  };

  useLayoutEffect(() => {
    copyAndResetGame();
  }, []);

  useEffect(() => {
    if (gameState === 'COMPLETE') {
      setShowCompleteModal(true);
      return;
    }
    if (gameState === 'GAME_OVER') {
      setShowGameOverModal(true);
      return;
    }
    if (gameState === 'PLAYING') {
      closeAllModal();
      copyAndResetGame();
      return;
    }
  }, [gameState]);

  useEffect(() => {
    if (!mineBoard) return;
    const isCompleted = checkComplete(mineBoard);
    if (isCompleted === true) updateGameState('COMPLETE');
  }, [mineBoard]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setGameState('COMPLETE');
  //   }, 3000);
  // }, []);

  return (
    <MineSweeperPage>
      <MineCount mineCount={mineCount} />
      {mineBoard && (
        <MineBoard
          mineBoard={mineBoard}
          mineCount={mineCount}
          gameState={gameState}
          updateMineBoard={updateMineBoard}
          updateMineCount={updateMineCount}
          updateGameState={updateGameState}
        />
      )}
      {!mineBoard && 'Loading Mine Board...'}
      {showGameOverModal && <GameOverModal updateGameState={updateGameState} />}
      {showCompleteModal && <CompleteModal updateGameState={updateGameState} />}
      <button onClick={onResetButtonClick}>다시 시작하기</button>
    </MineSweeperPage>
  );
};

export default App;
