import './Segment.css';

import Unit from '../assets/unit.svg?react';
import Split from '../assets/split.svg?react';

const Segment = ({segmentState, segment}) => {
  const {segments, setSegments, splitSegment, joinSegments} = segmentState;
  const length = segments[segment];
  const unitArray = [...Array(length)];
  return (
    <div className={'Segment'}>
      {length}
      <ul>
      {unitArray.map( (_, i) => {
        return (
          <li key={i}>
            <Unit className={'Unit'}></Unit>
            {i < length - 1 ? 
            <Split className={'Split'} onClick={() => splitSegment(segment, i+1)}></Split> :
            null}
          </li>
        );
      })}
      </ul>
    </div>
  );
}

export default Segment;