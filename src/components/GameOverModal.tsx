import { GameState } from '../interfaces/interfaces';
import ModalContainer from './ModalContainer';

interface GameOverModalProps {
  updateGameState: (newState: GameState) => void;
}

const GameOverModal = ({ updateGameState }: GameOverModalProps) => {
  const onRestartButtonClick = () => {
    updateGameState('PLAYING');
  };

  return (
    <ModalContainer>
      <h1>지뢰입니다 ㅜㅜ</h1>
      <h1>다시 시작 가능합니다!</h1>
      <button onClick={onRestartButtonClick}>다시 도전하기</button>
    </ModalContainer>
  );
};

export default GameOverModal;
