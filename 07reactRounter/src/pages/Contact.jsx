import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    let nav=useNavigate();
  return (
    <>
    <div style={{backgroundColor:"gray",padding:'5%',color:'white'}}> Contact: rajputamit0338@gmail.com</div>
    <div>
        <button style={{backgroundColor:'aqua'}} onClick={()=>nav("/")}>Go back to home &rarr;</button>
        <button style={{backgroundColor:'#242424' , padding:'6px',marginLeft:'20px',color:'white'}} onClick={()=>nav("/Projects")}>Go Projects &rarr;</button>
    </div>
    </>
  )
}

export default Contact
