import axios from 'axios';

const KEY = 'AIzaSyDKjm_nqMvJxt0FvNt3V8WmnLd4RkTA3eE';

export default axios.create ({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
