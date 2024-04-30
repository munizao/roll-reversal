import { useState } from 'react';

const useGame = () => {
  const [history, setHistory] = useState([]);
  const [initMax, setInitMax] = useState();

  const newGame = (initSegments) => {
    setInitMax(Math.max(...initSegments));
    setHistory([[...initSegments]]);
  }

  const appendSegments = (newSegments) => {
    const newHistory = [...history];
    newHistory.push(newSegments);
    setHistory(newHistory);
  }

  const getInitSegments = () => {
    return history[0];
  }

  const getCurrSegments = () => {
    return history.at(-1);
  }

  const isGoal = () => {
    return history[0].length === history.at(-1).length &&
      history[0].every((el, i) => el === history.at(-1)[history.at(-1).length - i - 1]);
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

  const applyMove = (newSegments) => {
    if (isLegal(newSegments)) {
      appendSegments(newSegments);
      return true;
    }
    return false;
  }

  const splitSegment = (seg, position) => {
    const newSegments = [...(history.at(-1))];
    newSegments[seg] -= position;
    newSegments.splice(seg, 0, position);
    return applyMove(newSegments);
  }
  const joinSegments = (seg) => {
    const newSegments = [...(history.at(-1))];
    newSegments[seg] += newSegments[seg + 1];
    newSegments.splice(seg + 1, 1);
    return applyMove(newSegments);
  }

  return {history, initMax, newGame, getInitSegments, getCurrSegments,
    isGoal, setStep, undo, reset, splitSegment, joinSegments};
}

export default useGame;