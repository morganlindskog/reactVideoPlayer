import axios from 'axios';

const KEY = 'AIzaSyDCRb6HabH1nJgbmva7gg1-iI6FCfF9oPY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
