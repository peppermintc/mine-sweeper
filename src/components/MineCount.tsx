interface MineCountProps {
  mineCount: number;
}

const MineCount = ({ mineCount }: MineCountProps) => {
  return <h3>남은 지뢰 개수: {mineCount}</h3>;
};

export default MineCount;
