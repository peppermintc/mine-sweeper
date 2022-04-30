import { GameState } from '../interfaces';
import ModalContainer from './ModalContainer';
import ExplosionImage from '../img/explosion.png';

interface GameOverModalProps {
  updateGameState: (newState: GameState) => void;
}

const GameOverModal = ({ updateGameState }: GameOverModalProps) => {
  const onRestartButtonClick = () => {
    updateGameState('PLAYING');
  };

  return (
    <ModalContainer>
      <h3>
        <img src={ExplosionImage} alt="explosion" /> 지뢰입니다
      </h3>
      <h3>다시 시작 가능합니다!</h3>
      <button onClick={onRestartButtonClick}>다시 도전하기</button>
    </ModalContainer>
  );
};

export default GameOverModal;
