import React from 'react'
import './index.scss'
import './border.css'
import { getMusicPlaylists, getMusicUrl } from '@/api/music'
import a from './a.gif'
import axios from 'axios'
// import PropTypes from 'prop-types'

class AudioComponent extends React.Component {
  state = {
    play: false,
    src: [],
    nameList: [],
    name: '点击播放···',
    currentTime: 0,
    index: 0,
    isLoading: false,
    img: '',
    duration: '',
  }
  audio = React.createRef()
  /* 暂停和播放 */
  togglePlay = props => {
    const { current } = this.audio
    if (!this.state.play) {
      current.src = this.state.src[isNaN(props) ? this.state.index : props].url
      current.currentTime = this.state.currentTime
      current.play()
      const filterName = this.state.nameList.filter(item => item.id === this.state.src[this.state.index].id)
      this.setState({ name: filterName[0].name })
      this.setState({ img: filterName[0].al.picUrl })
      this.setState({ play: true })
    } else {
      this.setState({ play: false, currentTime: current.currentTime })
      current.pause()
      const filterName = this.state.nameList.filter(item => item.id === this.state.src[this.state.index].id)
      this.setState({ name: filterName[0].name })
      this.setState({ img: filterName[0].al.picUrl })
    }
  }
  /* 下一首 */
  nextSong = () => {
    const { current } = this.audio
    if (this.state.index === 9) {
      this.setState({ index: 0 }, () => {
        const { current } = this.audio
        this.setState({ index: this.state.index + 1 }, () => {
          if (this.state.index === 9) {
            this.setState({ index: 0 })
          }
          const index = this.state.index
          current.src = this.state.src[index].url
          this.setState({ play: true, currentTime: 0 })
          current.play()
          const filterName = this.state.nameList.filter(item => item.id === this.state.src[this.state.index].id)
          this.setState({ name: filterName[0].name })
          this.setState({ img: filterName[0].al.picUrl })
        })
      })
    } else {
      this.setState({ index: this.state.index + 1 }, () => {
        if (this.state.index === 9) {
          this.setState({ index: 0 })
        }
        const index = this.state.index
        current.src = this.state.src[index].url
        this.setState({ play: true, currentTime: 0 })
        current.play()
        const filterName = this.state.nameList.filter(item => item.id === this.state.src[this.state.index].id)
        this.setState({ name: filterName[0].name })
        this.setState({ img: filterName[0].al.picUrl })
      })
    }
  }
  /* 上一首 */
  prevSong = () => {
    const { current } = this.audio
    if (this.state.index === 0) {
      this.setState({ index: 9 }, () => {
        const { current } = this.audio
        this.setState({ index: this.state.index - 1 }, () => {
          if (this.state.index === 0) {
            this.setState({ index: 9 })
          }
          const index = this.state.index
          current.src = this.state.src[index].url
          this.setState({ play: true, currentTime: 0 })
          current.play()
          const filterName = this.state.nameList.filter(item => item.id === this.state.src[this.state.index].id)
          this.setState({ name: filterName[0].name })
          this.setState({ img: filterName[0].al.picUrl })
        })
      })
    } else {
      this.setState({ index: this.state.index - 1 }, () => {
        if (this.state.index === 0) {
          this.setState({ index: 9 })
        }
        const index = this.state.index
        current.src = this.state.src[index].url
        this.setState({ play: true, currentTime: 0 })
        current.play()
        const filterName = this.state.nameList.filter(item => item.id === this.state.src[this.state.index].id)
        this.setState({ name: filterName[0].name })
        this.setState({ img: filterName[0].al.picUrl })
      })
    }
  }
  /* 是否已经播放完毕 播放完了换下一首 */
  Ended = () => {
    this.nextSong()
  }
  /* 返回音乐进度的变化 */
  controlAudio = e => {
    // console.log(moment(e).format('mm:ss'))
  }
  /* 获取音乐总时长 */
  loadedmetadata = e => {
    const str = this.formatDuraton(e.target.duration)
    const duration = str.substr(0, 8)
    this.setState({ duration })
  }
  /* 格式化音频时长 */
  formatDuraton = time => {
    if (time > -1) {
      var hour = Math.floor(time / 3600)
      var min = Math.floor(time / 60) % 60
      var sec = time % 60
      if (hour < 10) {
        time = '0' + hour + ':'
      } else {
        time = hour + ':'
      }

      if (min < 10) {
        time += '0'
      }
      time += min + ':'

      if (sec < 10) {
        time += '0'
      }
      time += sec
    }
    return time
  }

  componentDidMount() {
    /*  默认获取 自己网易云歌单的前10首歌  歌单ID ：6978126984*/
    /* http://music.163.com/playlist?id=6984839626&userid=45114226 */
    /* http://music.163.com/playlist?id=39456279&userid=45114226 */
    // getMusicPlaylists({ id: 6978126984 })
    //   .then(res => {
    //     const tracks = res.playlist.tracks
    //     if (tracks) {
    //       const ids = tracks.map(item => item.id)
    //       console.log(ids, 'ids')
    //       getMusicUrl({ id: ids.join(',') })
    //         .then(res => {
    //           const src = res.data
    //           this.setState({ src: src })
    //           this.setState({ nameList: tracks })
    //           this.setState({ isLoading: true })
    //         })
    //         .catch(err => {
    //           console.log(err)
    //         })
    //     } else {
    //       console.log('请求歌单失败!')
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    axios
      .get('http://localhost:3000/login/cellphone', {
        params: {
          phone: '13666235158',
          password: 'wym13666235158',
        },
        withCredentials: true,
      })
      .then(res => {
        axios
          .get('http://localhost:3000/playlist/detail', {
            params: {
              id: '39456279',
            },
            withCredentials: true,
          })
          .then(res => {
            console.log(res)
          })
      })
  }

  render() {
    return (
      <div className={`player-container ${this.state.isLoading ? 'player-container-loading' : null}`}>
        <div className="title-container">
          <div className="img-container">{<img src={this.state.img ? this.state.img : a} alt={this.state.name} />}</div>
          <h3 id="title" className="title">
            {this.state.name}
          </h3>
        </div>

        {/* <h3 id="artist" className="title">
          Vangard
        </h3> */}

        <audio ref={this.audio} onEnded={this.Ended} onTimeUpdate={e => this.controlAudio(e)} onLoadedMetadata={this.loadedmetadata} />
        <div className="progress-container" id="progress-container">
          <div className="progress" id="progress" style={{ width: '0%' }}></div>
          <div className="duration-wrapper">
            <span id="current-time" className="current-time">
              {this.state.duration ? '00:00' : '00:00'}
            </span>
            <span id="duration" className="duration">
              {this.state.duration.length === 0 ? '00:00' : this.state.duration}
            </span>
          </div>
        </div>

        <div className="player-controls">
          <i className="fas iconfont icon-shangyishou" id="prev" title="Previous" onClick={this.prevSong}></i>
          {!this.state.play ? (
            <i className="fas main-button iconfont icon-bofang" id="play" title="Play" onClick={this.togglePlay}></i>
          ) : (
            <i className="fas main-button iconfont icon-zanting1" id="play" title="suspended" onClick={this.togglePlay}></i>
          )}
          <i className="fas iconfont icon-xiayishou" id="next" title="Next" onClick={this.nextSong}></i>
        </div>
      </div>
    )
  }
}

export default AudioComponent
