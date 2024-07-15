import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Main from './components/Main';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/roll-reversal/:seq" element={<Main/>}></Route>
        <Route path="/roll-reversal/" element={<Main/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
