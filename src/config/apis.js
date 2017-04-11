import {
	baseUrl
} from './env'
import axios from 'axios'

console.log(baseUrl);
export const topicList = (data) => {
	return axios({
		url: baseUrl + 'topics',
		data: data
	})
}

export const topicInfo = (id) => {
	return axios.get(baseUrl + 'topic/' + id)
}

export const login = (data) => {
	return axios({
		url: baseUrl + 'accesstoken',
		method: 'post',
		data: data
	})
}

export const reply = (data, id) => {
	return axios({
		url: `${baseUrl}topic/${id}/replies`,
		method: 'post',
		data: data
	})
}

export const messageCount = (data) => {
	return axios({
		url: baseUrl + '/message/count',
		data: data
	})
}

export const messages = (data) => {
	return axios({
		url: baseUrl + 'messages',
		data: data
	})
}

export const upReply = (data, id) => {
	return axios({
		url: `${baseUrl}reply/${id}/ups`,
		method: 'post',
		data: data
	})
}

export const addTopic = (data) => {
	return axios({
		url: baseUrl + 'topics',
		method: 'post',
		data: data
	})
}

export const getUserInfo = (loginname) => {
	return axios.get(baseUrl + 'user/' + loginname)
}