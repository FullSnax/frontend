import sendRequest from './sendrequest.js'

const BASE_URL = 'http://localhost:8000/api/'

export function getDisplayItems() {
    return sendRequest(`${BASE_URL}menuitems/`);
}

export function getCollection() {
    return sendRequest(BASE_URL)
}

export function getDetail(id) {
    return sendRequest(`${BASE_URL}menuitems/${id}`)
}