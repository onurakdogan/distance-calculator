
import { useEffect, useState } from 'react';
import './App.css';

import { users} from './data/users';
import { coordinates } from './data/office';
import { calculateDistance } from './calculation/distanceCalculation';

function App() {

const [data,setData] = useState([]);
  
  useEffect(()=>{
      list(users);
  },[users])

  const list = () => {
    users.map((item)=>{
      let distance = calculateDistance(coordinates.latitude,coordinates.longitude,item.latitude,item.longitude);
      distance <= 100 && setData(data => [...data, item]);
    })
  }
 
  return (
    <div className="App">
      <p>Invation List</p>
      {
        data.map((item,index)=>(
          <div key={index}>{item.name}</div>
        ))
      }
    </div>
  );
}

export default App;
