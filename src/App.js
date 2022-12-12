
import { useEffect, useState } from 'react';
import './App.css';

import { users} from './data/users';
import { coordinates } from './data/office';
import { calculateDistance } from './calculation/distanceCalculation';

export default function App() {

const [data,setData] = useState([]);
   
  const list = () => {
    users.map((item)=>{
      let distance = calculateDistance(coordinates.latitude,coordinates.longitude,item.latitude,item.longitude);
      distance <= 100 && setData(data => [...data, item]);
    })
  }

   useEffect(()=>{
      list(users);
  },[])
 
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
