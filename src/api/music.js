/* 请求隔离 */
import http from '@/utils/http.js'

/**
 * 获取云音乐自己的歌单  官方
 */
export function getMusicUrl(params) {
  return new Promise((resolve, reject) => {
    http('get', '/wyy/song/url', params).then(
      res => {
        resolve(res)
      },
      error => {
        reject(error)
      }
    )
  })
}

/**
 * 获取歌曲详情
 */
export function getMusicDetail(params) {
  return new Promise((resolve, reject) => {
    http('get', '/wyy/song/detail', params).then(
      res => {
        resolve(res)
      },
      error => {
        reject(error)
      }
    )
  })
}

/**
 * 获取歌单详情  官方
 * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id,
 * 可以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，
 * 但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail
 */
export function getMusicPlaylists(params) {
  return new Promise((resolve, reject) => {
    http('get', '/wyy/playlist/detail', params).then(
      res => {
        resolve(res)
      },
      error => {
        reject(error)
      }
    )
  })
}

/**
 * 获取歌单详情  非官方
 * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id,
 * 可以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，
 * 但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail
 */
export function getCloudmusicPlaylists(params) {
  return new Promise((resolve, reject) => {
    http('get', '/music', params).then(
      res => {
        resolve(res)
      },
      error => {
        reject(error)
      }
    )
  })
}
