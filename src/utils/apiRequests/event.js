import axios from 'axios';
import {headerSetter} from '../../helper/headerSetter';
import {history} from '../../App';

export const getEvents = async (token, data, callback, errorcallback) => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/events/get`, data, headerSetter(token))
      .then(res => {
        callback !== null && callback(res)
      })
      .catch(err => {
        errorcallback !== null && errorcallback(err)
      })
}