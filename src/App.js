import { useEffect, useState } from 'react';
import './App.css';
import SignInSide from './Login';
import Portal from './Portal';

function App() {

  const [user, setUser] = useState(null)
  const [basicData, setBasicData] = useState(null)

  useEffect(() => {
    setUser( window.localStorage.getItem('user') ? 
    JSON.parse(window.localStorage.getItem('user')) : null )
  }, [user])

const [timeInterval, setTimeInterval] = useState(0);
setTimeout(() => setTimeInterval(timeInterval + 1) , 5000);



const update = async () => {
  const res = await fetch('https://api.thingspeak.com/channels/1803344/feeds.json?results=2')
  const data = await res.json()
  setBasicData(data)
}

useEffect( () => { 


  update();

  console.log(basicData , timeInterval);

 }, [timeInterval]);

  

  return (
    <div className="App">
      {!user ? 
      
      <SignInSide setUser={setUser} /> : 
      <Portal basicData={basicData} user={user}  setUser={setUser}/>

      }
    </div>
  );
}

export default App;
