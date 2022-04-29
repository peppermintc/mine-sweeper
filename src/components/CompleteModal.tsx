import { ChangeEvent, useState } from 'react';
import { GameState, Player, RankData } from '../interfaces/interfaces';
import ModalContainer from './ModalContainer';

interface CompleteModalProps {
  rankData: RankData;
  currentTime: number;
  updateRankData: (newRankData: RankData) => void;
  updateGameState: (newState: GameState) => void;
}

const CompleteModal = ({
  rankData,
  currentTime,
  updateRankData,
  updateGameState,
}: CompleteModalProps) => {
  const [playerName, setPlayerName] = useState<string>('');

  const onRestartButtonClick = () => {
    const newPlayer: Player = { name: playerName, time: currentTime };
    const higherRanks = rankData.filter((player) => player.time < currentTime);
    const lowerRanks = rankData.filter((player) => player.time >= currentTime);
    const newRankData = [...higherRanks, newPlayer, ...lowerRanks];
    updateRankData(newRankData);
    updateGameState('PLAYING');
    setPlayerName('');
  };

  const onPlayerNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlayerName = e.target.value;
    setPlayerName(newPlayerName);
  };

  return (
    <ModalContainer>
      <h3>성공했습니다! 대단하시네요!</h3>
      <h3>플레이어 이름을 입력해주세요</h3>
      <input type="text" onChange={onPlayerNameInputChange} />
      <h3>한번 더 하실 수 있습니다!</h3>
      <button onClick={onRestartButtonClick}>한번 더 도전하기</button>
    </ModalContainer>
  );
};

export default CompleteModal;
