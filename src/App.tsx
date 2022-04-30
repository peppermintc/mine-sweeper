import { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { MINE_BOARD_ORIGINAL, MINE_COUNT } from './data/boardData';
import { RANK_DATA } from './data/rankData';
import { Board, GameState, RankData } from './interfaces';
import { checkComplete } from './utils/checkComplete';
import CompleteModal from './components/CompleteModal';
import GameOverModal from './components/GameOverModal';
import MineBoard from './components/MineBoard';
import MineCount from './components/MineCount';
import RankTable from './components/RankTable';
import Timer from './components/Timer';

const MineSweeperPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [rankData, setRankData] = useState<RankData>(RANK_DATA);
  const [gameState, setGameState] = useState<GameState>('PLAYING');
  const [mineBoard, setMineBoard] = useState<Board>();
  const [mineCount, setMineCount] = useState<number>(MINE_COUNT);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);
  const [showCompleteModal, setShowCompleteModal] = useState<boolean>(false);

  const updateRankData = (newRankData: RankData) => setRankData(newRankData);
  const updateMineBoard = (newMineBoard: Board) => setMineBoard(newMineBoard);
  const updateMineCount = (newMineCount: number) => setMineCount(newMineCount);
  const updateGameState = (newGameState: GameState) =>
    setGameState(newGameState);
  const updateCurrentTime = (newCurrentTime: number) =>
    setCurrentTime(newCurrentTime);

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
    setCurrentTime(0);
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

    let isCompleted: boolean = false;
    let didFoundAllMine: boolean = false;
    let didFoundAllNone: boolean = false;

    didFoundAllNone = checkComplete.foundAllNone(mineBoard);
    if (mineCount === 0)
      didFoundAllMine = checkComplete.foundAllMine(mineBoard);

    isCompleted = didFoundAllMine || didFoundAllNone;
    if (isCompleted === true) updateGameState('COMPLETE');
  }, [mineBoard, mineCount]);

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
      {showCompleteModal && (
        <CompleteModal
          rankData={rankData}
          currentTime={currentTime}
          updateRankData={updateRankData}
          updateGameState={updateGameState}
        />
      )}
      <button onClick={onResetButtonClick}>다시 시작하기</button>
      <Timer
        gameState={gameState}
        currentTime={currentTime}
        updateCurrentTime={updateCurrentTime}
      />
      <RankTable rankData={rankData} />
    </MineSweeperPage>
  );
};

export default App;
