import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-176f1/us-central1/api' // API URL (CLOUD FUNCTION)
});

export default instance;