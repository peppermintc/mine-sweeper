import styled from 'styled-components';
import MineBoard from './components/MineBoard';
import { MINE_BOARD } from './data/boardData';

const MineSweeperPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <MineSweeperPage>
      <MineBoard mineBoard={MINE_BOARD} />
    </MineSweeperPage>
  );
};

export default App;
