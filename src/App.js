import {Routes,Route} from 'react-router-dom';
import './App.css';
import LobbyScreen from './screens/lobby';
import RoomPage from './screens/room';
import Recorder from './screens/ScreenShare';
import Canvas from "./screens/whiteboard";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/whiteboard' element={<Canvas/>} />
      <Route path='/screenshare' element={<Recorder/>} />
      <Route path='/lobby' element={<LobbyScreen />} />
      <Route path='/room/:roomId' element={<RoomPage />} />
    </Routes>
    </div>
  );
}

export default App;
