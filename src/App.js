import { useState, useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie/es6';
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)
  if(!isAuth){
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
}
  return (<div>
    {room? (
      <div>Chat</div>
    ):(
      <div className="room">
        <label>Enter Room Name</label>
        <input ref={roomInputRef} onChange={(e) => setRoom(e.target.value)}/>
          <button onClick={() => {
            setRoom(roomInputRef.current.value)
        }}>Enter Chat</button>
      </div>
    )}
     </div>)
}

export default App;
