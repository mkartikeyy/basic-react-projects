import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(4)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setcharAllowed] = useState(true)
  const [password, setPassword] = useState("")
  const passRef= useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%&~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random()*str.length) + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md rounded-xl shadow-sm px-4 py-2 text-orange-700 bg-red-300'>
      <h2 className='my-3 text-black ' >Password generator</h2>
      <div className=' flex shadow rounded-lg overflow-hidden  mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full px-1 py-3 text-center' 
          placeholder="password here"
          readOnly
          ref={passRef}       
          />
          <button 
          onClick={copyPasswordToClipboard} className='px-3 py-1 bg-red-600 text-orange-100 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={4} max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev)=>!prev)
              }} 
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev)=>!prev)
              }} 
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
