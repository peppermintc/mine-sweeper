import styled from 'styled-components';
import { Player, RankData } from '../interfaces';

interface RankTableProps {
  rankData: RankData;
}

const RankTableContainer = styled.div`
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  border: 3px solid black;
  padding: 20px;
  text-align: center;
`;

const PlayerContainer = styled.span`
  width: 250px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: lightgray;
  }
`;

const Name = styled.span`
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const RankTable = ({ rankData }: RankTableProps) => {
  return (
    <RankTableContainer>
      <h3>Rank</h3>
      {rankData.map((player: Player, index) => (
        <PlayerContainer key={index}>
          <span>{index + 1}</span>
          <Name>{player.name}</Name>
          <span>{player.time}</span>
        </PlayerContainer>
      ))}
    </RankTableContainer>
  );
};

export default RankTable;
