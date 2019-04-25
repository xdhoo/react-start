import axios from 'axios'

const base_url = 'http://localhost:7777';

const getPlayList = () => {
  return axios.get(base_url + '/playList')
}

const getTopList = () => {
  return axios.get(base_url + '/topList')
}

const getPlayListDetail = (id) => {
  return axios.get(base_url + '/playList?id=' + id)
}

const getTopListDetail = (id) => {
  return axios.get(base_url + '/topList?id=' + id)
}

export default {
  getPlayList,
  getTopList,
  getPlayListDetail,
  getTopListDetail
}