import axios from 'axios';
const KEY = AIzaSyAVJx0b2opx_yX22rK2SDzgdp_KHvBu8e4

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})