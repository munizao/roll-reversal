import { useState } from 'react';

const useGame = () => {
  const [history, setHistory] = useState([]);
  const [initMax, setInitMax] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const init = () => {
    setHistory([]);
    setInitMax(null);
    setError('');
  }

  const newGame = (initSegments) => {
    const legality = checkLegal(initSegments);
    if (legality.error !== 'repeated-size') {
      setInitMax(Math.max(...initSegments));
      setHistory([[...initSegments]]);
      setError('');
    }
    else {
      setError(legality.error);
    }
    setSuccess(false);
  }

  const appendSegments = (newSegments) => {
    const newHistory = [...history];
    newHistory.push(newSegments);
    setHistory(newHistory);
    return newHistory;
  }

  const getInitSegments = () => {
    return history[0];
  }

  const getCurrSegments = () => {
    return history.at(-1);
  }

  const isGoal = (hist) => {
    return hist[0].length === hist.at(-1).length &&
      hist[0].every((el, i) => el === hist.at(-1)[hist.at(-1).length - i - 1]);
  }

  const setStep = (step) => {
    const newHistory = history.slice(0, step);
    setHistory(newHistory);
    
  }

  const undo = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  const reset = () => {
    const newHistory = history.slice(0,1);
    setHistory(newHistory);
  }

  const checkLegal = (segments) => {
    if (Math.max(...segments) > initMax) {
      return {legal: false, error: 'init-max-exceeded'};
    }
    const segSet = new Set(segments);
    if (segments.length > segSet.size) {
      return {legal: false, error: 'repeated-size'};
    }
    return {legal: true, error: null};
  }

  const applyMove = (moveFunc, params) => {
    const newSegments = moveFunc(...params);
    const legality = checkLegal(newSegments);
    let newHistory = history;
    if (legality.legal) {
      newHistory = appendSegments(newSegments);
    }
    setError(legality.error);
    if (isGoal(newHistory)) {
      setSuccess(true);
    }
  }

  const splitSegment = (seg, position) => {
    const newSegments = [...(history.at(-1))];
    newSegments[seg] -= position;
    newSegments.splice(seg, 0, position);
    return newSegments;
  }

  const joinSegments = (seg) => {
    const newSegments = [...(history.at(-1))];
    newSegments[seg] += newSegments[seg + 1];
    newSegments.splice(seg + 1, 1);
    return newSegments;
  }

  return {history, initMax, error, init, newGame, getInitSegments, getCurrSegments,
    isGoal, setStep, undo, reset, checkLegal, applyMove, splitSegment, joinSegments, success, setSuccess};
}

export default useGame;