import React from 'react'
import './welcome.scss'
import img from './toplogo.png'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="top_img">
      <div className="top_logo">
        <img src={img} alt="logo" />
      </div>
      <div className="top_title">
        <span className="top_title_name">gold</span>
        <hr className="top_hr_style01" />
        <span className="top_title_text">≡(▔﹏▔)≡</span>
      </div>
      <div className="next-container">
        <Link className="next" to="/home">
          Home
        </Link>
      </div>
    </div>
  )
}

export default Welcome
