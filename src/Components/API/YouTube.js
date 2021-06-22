import axios from 'axios';
const KEY = 'AIzaSyBzr2JT9nHB5c8erLdlif5aej9R8Spudnw';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
})
