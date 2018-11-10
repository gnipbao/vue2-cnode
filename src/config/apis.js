/*
 * api interface config
 * use axios
 */
import { baseUrl } from './env';
import axios from 'axios';

export const topicList = data => {
  return axios({
    url: baseUrl + 'topics',
    params: data,
  });
};

export const topicInfo = id => {
  return axios.get(baseUrl + 'topic/' + id);
};

export const login = data => {
  return axios({
    url: baseUrl + 'accesstoken',
    method: 'post',
    data: data,
  });
};

export const reply = (data, id) => {
  return axios({
    url: `${baseUrl}topic/${id}/replies`,
    method: 'post',
    data: data,
  });
};

export const messageCount = data => {
  return axios({
    url: baseUrl + '/message/count',
    method: 'get',
    params: data,
  });
};

export const messages = data => {
  return axios({
    url: baseUrl + 'messages',
    method: 'get',
    params: data,
  });
};

export const upReply = (data, id) => {
  return axios({
    url: `${baseUrl}reply/${id}/ups`,
    method: 'post',
    data: data,
  });
};

export const addTopic = data => {
  return axios({
    url: baseUrl + 'topics',
    method: 'post',
    data: data,
  });
};

export const getUserInfo = loginname => {
  return axios.get(baseUrl + 'user/' + loginname);
};
