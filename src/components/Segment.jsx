import './Segment.css';

import Unit from '../assets/unit.svg?react';
import Split from '../assets/split.svg?react';
import Join from '../assets/join.svg?react';
import Spacer from '../assets/spacer.svg?react';

const Segment = ({game, segment, rollType}) => {
  const {getCurrSegments, getInitSegments, checkLegal, applyMove, splitSegment, joinSegments} = game;
  const segments = rollType == 'active' ? getCurrSegments() : getInitSegments();
  const length = segments[segment];
  const unitArray = [...Array(length)];
  const unitsWide = 65 / (segments.reduce((a,b)=>a+b, 0) + 8);
  const unitStyle = {width:unitsWide + 'vw', height:(2*unitsWide) + 'vw'};
  return (
    <div className={'Segment'}>
      <div className='Length'>
        {length}
      </div>
      <ul className='Units'>
      {unitArray.map( (_, i) => {
        return (
          <li key={i}>
            <Unit className={'Unit'} style={unitStyle}></Unit>
            {i < length - 1 && rollType == 'active' ? 
              <Split className={`Split ${checkLegal(splitSegment(segment, i+1)).legal ? 'legal' : 'illegal'}`} 
                onClick={() => applyMove(splitSegment, [segment, i+1])} style={unitStyle}>
              </Split> :
            null}
          </li>
        );
      })}
      </ul>
      {segment < segments.length - 1 && rollType == 'active' ? 
        <Join className={`Join ${checkLegal(joinSegments(segment)).legal ? 'legal' : 'illegal'}`} 
          onClick={() => applyMove(joinSegments, [segment])} style={unitStyle}>
        </Join> :
        <Spacer className={'Join'} style={unitStyle}></Spacer>
      }
    </div>
  );
}

export default Segment;