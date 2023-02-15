import axios from 'axios';
import { SERVER_ADDRESS, SERVER_PORT } from './constants';

export const AXIOS = axios.create({ baseURL: `${SERVER_ADDRESS}:${SERVER_PORT}` });
AXIOS.defaults.headers.post['Content-Type'] = 'aplication/json';
