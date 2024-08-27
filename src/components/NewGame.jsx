import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './NewGame.css';

const NewGame = ({game}) => {
  const navigate = useNavigate();
  const {init} = game;
  const [text, setText] = useState('');

  const textToList = (text) => {
    // TODO: proper regexes and validation and stuff.
    const strList = text.split(' ');
    return strList.map((value) => {
      return parseInt(value);
    });
  };

  function initListKeyPress({target, key}) {
    if (key == "Enter") {
        startGame(target.value);
    }
  }

  const makePath = (list) => {
    return "/roll-reversal/" + list.join('-');
  }

  const startGame = (text) => {
    init();
    navigate(makePath(textToList(text)));
  }

  return (
    <div className={'NewGame'}>
      <p>
        <b>Start new game from sequence:</b>
      </p>
      <div className={'ListEntry'}>
        <input id={'init-list'} type="text" value={text} 
        placeholder="Enter list or select"
        onChange={({target}) => setText(target.value)} 
        onKeyDown={(event) => initListKeyPress(event)} />
        <select onChange={({target}) => startGame(target.value)} id={'presets'} size={4}>
          <option value="7 5 3">7 5 3</option>
          <option value="1 6 3">1 6 3</option>
          <option value="5 4 1 2 7">5 4 1 2 7</option>
          <option value="4 8 6 5">4 8 6 5</option>
        </select>
      </div>
    </div>
  );
}

export default NewGame;