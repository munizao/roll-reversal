import Segment from './Segment';
import './Roll.css';
import Join from '../assets/join.svg?react';

const Roll = ({segmentState}) => {
  const {segments, setSegments, splitSegment, joinSegments} = segmentState;
  return (
    <ul className={'Roll'}>
      {segmentState.segments?.map((length, i) => {
        return (
          <li key={i}>
            <Segment segmentState={segmentState} segment={i}></Segment>
            {i < segments.length - 1 ? 
            <Join className={'Join'} onClick={() => joinSegments(i)}></Join> :
            null}
          </li>
        );
      })}
    </ul>
  );
}

export default Roll;