import Roll from './Roll.jsx'
import './Board.css';

const Board = ({game}) => {
  const {isGoal} = game;
  return (
    <div className='Board'>
      <Roll type={'goal'} game={game}></Roll>
      <Roll type={'active'} game={game}></Roll>
    </div>
  );
}

export default Board;