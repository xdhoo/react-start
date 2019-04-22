import axios from 'axios'

const base_url = 'http://localhost:7777';

const getPlayList = () => {
  return axios.get(base_url + '/playList')
}

const getTopList = () => {
  return axios.get(base_url + '/topList')
}

export default {
  getPlayList,
  getTopList
}