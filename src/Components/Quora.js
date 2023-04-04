import React from 'react'
import "../CSS/Quora.css"
import NavBar from "./NavBar"
import SideBar from './SideBar'
import Feed from './Feed'
import Widget from './Widget'


function Quora() {

  

  return (
    <div className='quora'>
      <NavBar/>
      <div className="quora__content">
        <SideBar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  )
}

export default Quora
