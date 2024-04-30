import './Segment.css';

import Unit from '../assets/unit.svg?react';
import Split from '../assets/split.svg?react';
import Join from '../assets/join.svg?react';
import Spacer from '../assets/spacer.svg?react';

const Segment = ({game, segment, rollType}) => {
  const {getCurrSegments, getInitSegments, splitSegment, joinSegments} = game;
  const segments = rollType == 'active' ? getCurrSegments() : getInitSegments();
  const length = segments[segment];
  const unitArray = [...Array(length)];
  return (
    <div className={'Segment'}>
      <div className='Length'>
        {length}
      </div>
      <ul className='Units'>
      {unitArray.map( (_, i) => {
        return (
          <li key={i}>
            <Unit className={'Unit'}></Unit>
            {i < length - 1 && rollType == 'active'? 
            <Split className={'Split'} onClick={() => splitSegment(segment, i+1)}></Split> :
            null}
          </li>
        );
      })}
      </ul>
      {segment < segments.length - 1 && rollType == 'active' ? 
        <Join className={'Join'} onClick={() => joinSegments(segment)}></Join> :
        <Spacer className={'Join'}></Spacer>
      }
    </div>
  );
}

export default Segment;