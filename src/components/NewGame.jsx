import { useState } from 'react';
import './NewGame.css';

const NewGame = ({game}) => {
  const {newGame} = game;
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
        console.log(target.value);
        newGame(textToList(target.value));
    }
  }

  return (
    <div className={'NewGame'}>
      <p>
        <b>Start new game from sequence:</b>
      </p>
      <div className={'ListEntry'}>
        <input id={'init-list'} type="text" value={text} 
        placeholder="Number list"
        onChange={({target}) => setText(target.value)} 
        onKeyDown={(event) => initListKeyPress(event)} />
        <select onChange={({target}) => newGame(textToList(target.value))} id={'presets'} size={4}>
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