import React from 'react'
import './index.css'
// 简历信息
import { resumes } from './resumes'

function Resume() {
  return resumes.map(item => {
    return (
      <div key={item.id} className="textList">
        {item.content}
      </div>
    )
  })
}

export default Resume
