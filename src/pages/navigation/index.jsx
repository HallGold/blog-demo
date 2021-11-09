import React from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'

function Navigation(props) {
  const Home = () => {
    props.history.go(-1)
  }

  return (
    <nav id="colorNav">
      <ul>
        <li className="green" onClick={Home}>
          <i className="iconfont icon-zhuye"></i>
          {/* <ul>
            <li>
              <a href="#">Dropdown item 1</a>
            </li>
            <li>
              <a href="#">Dropdown item 2</a>
            </li>
            <li>
              <a href="#">Dropdown item 2</a>
            </li>
            <li>
              <a href="#">Dropdown item 2</a>
            </li>
          </ul> */}
        </li>
        <li className="red">
          <i className="iconfont icon-dianhua4"></i>
          <ul>
            <li>
              <i>xxxxxxxxxx</i>
            </li>
          </ul>
        </li>
        <li className="blue">
          <i className="iconfont icon-telegarm"></i>
          <ul>
            <li>
              <i>@MikeyHall</i>
            </li>
          </ul>
        </li>
        {/* <li className="purple" onClick={c}>
          <i className="fa fa-random"></i>
        </li> */}
        {/*  <li className="yellow" onClick={d}>
          <i className="fa fa-home"></i>
        </li> */}
      </ul>
    </nav>
  )
}

export default withRouter(Navigation)
