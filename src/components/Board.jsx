import Roll from './Roll.jsx'
import './Board.css';

const Board = ({game}) => {
  const {isGoal} = game;
  return (
    <div className='Board'>
      <Roll type={'goal'} game={game}></Roll>
      <div className='overlay'>
        <div className={`Success ${isGoal() ? '' : 'hidden'}`}>Success!</div>
        <Roll type={'active'} game={game}></Roll>
      </div>
      <p>
        Note: this thing is buggy and unfinished. I am aware!
      </p>
    </div>
  );
}

export default Board;