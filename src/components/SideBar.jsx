import NewGame from './NewGame';
import './SideBar.css';

const SideBar = ({game}) => {
  const {history, setStep} = game;
  return (
    <div className={'SideBar'}>
      <div className={'Rules SideBlock'}>
        <p>
          <b>To play:</b> Click between roll units to split a segment apart, 
          or between two segments to join them.
        </p>
        <p>
          <b>Rules:</b> You may not make a segment larger than the largest starting segment, 
          and you may not make two segments of the same size. 
        </p>
        <p>
          <b>Goal:</b> Reverse the initial setup.
        </p>
      </div>
      <div className={'Controls SideBlock'}>
        <div className={'History'}>
          <p>
            <b>Steps: {history.length - 1}</b>
          </p>
          <p>
            <b>Step log:</b>
          </p>
          <ul>
            {history.toReversed().map((state, i) => {
              return ( 
                <li key={i} onClick={() => {setStep(i)}}>
                  {state.map((segment, j) => {
                    return (
                      <span key={j}>
                        {segment.toString() + ' '}
                      </span>
                    );
                  })} 
                </li>
              );
            })}
          </ul>
        </div>
        <NewGame game={game}></NewGame>
      </div>
    </div>
  );
} 

export default SideBar;