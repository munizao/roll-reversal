import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board.jsx'
import useGame from './hooks/useGame.js';
import SideBar from './components/SideBar.jsx';



const App = () => {
  const game = useGame();
  const {history, newGame} = game;
  if (history.length == 0) {
    newGame([7, 5, 3]);
  }
  return (
    <main>
      <SideBar game={game}></SideBar>
      <div className={'Game'}>
        <header>
          <h1>Roll Reversal</h1>
          <h2>A number split and join game</h2>
        </header>  
        <Board game={game}></Board>
      </div>
    </main>
  )
}

export default App