import { GameState } from '../interfaces/interfaces';
import ModalContainer from './ModalContainer';

interface CompleteModalProps {
  updateGameState: (newState: GameState) => void;
}

const CompleteModal = ({ updateGameState }: CompleteModalProps) => {
  const onRestartButtonClick = () => {
    updateGameState('PLAYING');
  };

  return (
    <ModalContainer>
      <h1>성공했습니다! 대단하시네요!</h1>
      <h1>한번 더 하실 수 있습니다!</h1>
      <button onClick={onRestartButtonClick}>한번 더 도전하기</button>
    </ModalContainer>
  );
};

export default CompleteModal;
