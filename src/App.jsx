import { useState } from 'react'
import './App.css'

const App = () => {

let time = new Date(). toLocaleTimeString();

const[ctime, setCtime] = useState (time);

const UpdateTime = () => {
  time = new Date(). toLocaleTimeString();
  setCtime(time);
};

setInterval(UpdateTime,1000)
  return (
    <>
      <h1>
        {ctime}
      </h1>

      <button className='btn'></button>
      <button className='btn'></button>
      <button className='btn'></button>
      <button className='btn'></button>
      <button className='btn'></button>
      
    </>

  )
}

export default App
