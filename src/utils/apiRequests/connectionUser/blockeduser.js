import axios from 'axios';
import { headerSetter } from '../../../helper/headerSetter';

export const add = async (token, data, callback, errorcallback) => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/ucBlockedUser/add`, data, headerSetter(token))
        .then(res => {
            callback !== null && callback(res)
        })
        .catch(err => {
            errorcallback !== null && errorcallback(err)
        })
}