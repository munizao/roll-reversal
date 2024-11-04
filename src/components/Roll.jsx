import Segment from './Segment';
import './Roll.css';

const Roll = ({type, game}) => {
  const {getCurrSegments, getInitSegments, success} = game;
  const segments = type == 'active' ? getCurrSegments() : getInitSegments();
  return (
    <div className={'RollContainer'}>
      <p>
        {type == 'goal' ? <span>Goal:</span> : <span>Current:</span>}
      </p>
      <div className={'overlay'}>
      <div className={`Success ${type === 'active' && success ? '' : 'hidden'}`}><span>Success!</span></div>
      <ul className={'Roll'}>
        {segments.map((_, i) => {
          return (
            <li key={i}>
              <Segment game={game} 
              segment={type == 'active' ? i : segments.length - (i+1)} 
              rollType={type}>
              </Segment>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default Roll;