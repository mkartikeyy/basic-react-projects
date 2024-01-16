import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")

  return (
    <div className='w-full h-screen duration-150' style={{backgroundColor:color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-50 rounded-xl px-3 py-2'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("purple")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=> setColor("orange")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=> setColor("pink")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
