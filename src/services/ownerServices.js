//@ts-check
import HttpServices from './HttpServices';
import CONSTANTS from '../util/constants';

const getWorker = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.ASSIGNMENT}?limit=${body.limit}&offset=${body.offset}&userId=${body.userId}${body.name ? '&name=' + body.name : ''}`)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .get()
    });
}

const getCategory = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.CATEGORY}`)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .get()
    });
}

const saveAward = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.CATEGORY}`)
            .setBody(body)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .post()
    });
}


export default {
    getWorker,
    getCategory,
    saveAward
}