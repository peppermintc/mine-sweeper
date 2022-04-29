import { useEffect, useState } from 'react';
import { GameState } from '../interfaces/interfaces';

interface TimerProps {
  gameState: GameState;
  currentTime: number;
  updateCurrentTime: (newCurrentTime: number) => void;
}

const Timer = ({ gameState, currentTime, updateCurrentTime }: TimerProps) => {
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    if (gameState === 'PLAYING') setIsTimerOn(true);
    else setIsTimerOn(false);
  }, [gameState]);

  useEffect(() => {
    if (isTimerOn === false) return;
    else setTimeout(() => updateCurrentTime(currentTime + 1), 1000);
  }, [isTimerOn, currentTime, updateCurrentTime]);

  return <h3>소요 시간: {currentTime}초</h3>;
};

export default Timer;
