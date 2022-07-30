import sendRequest from './send-request'

const BASE_URL = 'http://localhost:8000/api/profile/'

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getCollection() {
    return sendRequest(BASE_URL)
}