import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
 const [length,setLength]=useState(8);
 const [takeNum,settakeNum]=useState(false);
 const [takeChar,settakeChar]=useState(false);
 const [password,setpassword]=useState("")
 
 //useRef hook
 const passwordREf=useRef(null)

 //function for passGen working and useCallback is for optimization
 const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(takeNum) str+="0123456789";

    if(takeChar) str+="!@#$%^&*(){}[]+-*/_";

    for(let i=1;i<=length;i++)
    {
      let char =Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char);
    }
    setpassword(pass);
 },[length,takeNum,takeChar,setpassword])


 useEffect(()=>{
    passwordGenerator();
 },[length,takeNum,takeChar,setpassword]);

 const copyPassword=useCallback(()=>{
  passwordREf.current?.select();
  // passwordREf.current?.setSelectionRange(0,10);
  window.navigator.clipboard.writeText(password);
 },[password])
  return (
    <>
     {/* <h1 className='text-4xl text-center text-white'>Password Generator</h1> */}

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordREf}
            />

            <button
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>
          </div>
           <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={takeNum}
                id='numberInput'
                onChange={()=>{settakeNum((prev)=>!prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={takeChar}
                id='charInput'
                onChange={()=>{settakeChar((prev)=>!prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>


           </div>
      </div>
    </>
  )
}

export default App
