import './Main.css'
import { useParams } from "react-router-dom";
import Board from './Board.jsx'
import useGame from '../hooks/useGame.js';
import SideBar from './SideBar.jsx';
import FootBar from './FootBar.jsx';

const Main = () => {
  const params = useParams();
  // console.log("params " + JSON.stringify(params));
  const seq = params.seq?.split("-").map((val) => parseInt(val));
  const game = useGame();
  // console.log("game " + JSON.stringify(game));
  const {history, newGame} = game;

  if (history.length == 0) {
    if (seq) {
      newGame(seq); // Actually parse the thing
    }
    else {
      newGame([7, 5, 3]);
    }
  }
  return (
      <main>
      <SideBar game={game}></SideBar>
      <div className={'Game'}>
        <header>
          <h1>Roll Reversal</h1>
          <h2>A number split and join game by Alexandre Muñiz</h2>
        </header>  
        <Board game={game}></Board>
        <FootBar game={game}></FootBar>
      </div>
    </main>
  )
}

export default Main;