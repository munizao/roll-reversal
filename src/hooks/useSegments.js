import { useState, useEffect } from 'react';

const useSegments = (initSegments) => {
  const [initMax, setInitMax] = useState(Math.max(...initSegments));
  const [segments, setSegments] = useState(initSegments);

  const isLegal = (segments) => {
    console.log("initMax", initMax);
    if (Math.max(...segments) > initMax) {
      return false;
    }
    const segSet = new Set(segments);
    if (segments.length > segSet.size) {
      return false;
    }
    return true;
  } 

  const splitSegment = (seg, position) => {
    console.log("seg: ", seg, "position:", position);
    const newSegments = [...segments];
    newSegments[seg] -= position;
    newSegments.splice(seg, 0, position);
    if (isLegal(newSegments)) {
      setSegments(newSegments);
      return true;
    }
    return false;
  }
  const joinSegments = (seg) => {
    const newSegments = [...segments];
    newSegments[seg] += newSegments[seg + 1];
    newSegments.splice(seg + 1, 1);
    if (isLegal(newSegments)) {
      setSegments(newSegments);
      return true;
    }
    return false;
  }

  return {segments, setSegments, splitSegment, joinSegments}
}

export default useSegments;