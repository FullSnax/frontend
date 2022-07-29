import sendRequest from './send-request'

const BASE_URL = 'http://127.0.0.1:8000/api/profile/'

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getCollection() {
    return sendRequest(BASE_URL)
}