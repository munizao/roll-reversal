import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Roll from './components/Roll'
import useSegments from './hooks/useSegments.js';



function App() {
  // const [count, setCount] = useState(0)
  const segmentState = useSegments([7, 5, 3]);
  return (
    <>
      <h1>Roll Reversal</h1>
      <div>
        <Roll segmentState={segmentState}></Roll>
      </div>
    </>
  )
}

export default App
