import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import "../CSS/QuoraBox.css"
import { selectUser } from '../features/userSlice'
function QuoraBox() {

  const user = useSelector(selectUser)
  return (
    <div className='quoraBox'>
      <div className="quoraBox__info">
        <Avatar src={user?.photo || ""}/>
        <h3>{user?.displayName || user?.email || ""}</h3>
        </div> 
        <div className="quoraBox__quora">
            <p>What do you want to ask or share?</p>
        </div>
    </div>
  )
}

export default QuoraBox
