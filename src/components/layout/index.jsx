import React from 'react'
import defaultSettings from '@/utils/defaultSettings'
import Neon from '@/pages/welcomeText'
import Button from '@/pages/button/index'
import '@/pages/wallpaper/wallpaper.css'
import Audio from '@/pages/Audio/index'
import Navigation from '@/pages/navigation/index'
import Resume from '@/pages/Resume/index'
import './index.css'
import { Row, Col } from 'antd'

function Index(props) {
  React.useEffect(() => {}, [])
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Neon></Neon>
        </Col>
        <Col className="Colstyle" style={{ paddingRight: '25px' }} xs={24} sm={24} md={24} lg={12} xl={12}>
          <Navigation></Navigation>
        </Col>
        <Col className="Colstyle" xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button></Button>
        </Col>
        <Col className="Colstyle" style={{ marginTop: '30px' }} xs={24} sm={24} md={24} lg={24} xl={24}>
          <Audio></Audio>
        </Col>
        <Row className="textListContainer">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Resume></Resume>
          </Col>
        </Row>
      </Row>
      ,{/* 头部组件 */}
      {/* 视频全屏背景 */}
      <video controls autoPlay="autoPlay" loop="loop" muted="muted">
        <source src={defaultSettings.backgroundVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default Index
