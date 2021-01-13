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

const getFreeWorkers = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.USER_FREE}${body.userId}/assignment`)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .get()
    });
}

const setRequestAction = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${body.action === 1 ? CONSTANTS.URL_APIS.APPROVE : CONSTANTS.URL_APIS.REJECT}`)
            .setBody(body.data)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .post()
    });
}

const setRequestEditAction = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.APPROVE}`)
            .setBody(body.data)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .post()
    });
}

const setRequestChangedAction = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.EDIT}`)
            .setBody(body.data)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .post()
    });
}

const getPendingRequest = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.PENDING}?userId=${body.userId}${body.month ? '&month=' + body.month : ''}${body.year ? '&year=' + body.year : ''}`)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .get()
    });
}

const getPendingChangedRequest = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.PENDING_EDIT}?userId=${body.userId}${body.month ? '&month=' + body.month : ''}${body.year ? '&year=' + body.year : ''}`)
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
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.SAVE}`)
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

const login = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.LOGIN}`)
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

const getAwardByWorker = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(`${CONSTANTS.API}${CONSTANTS.URL_APIS.LIST_AWARD}/${body.userId}/${body.year}`)
            .success(response => {
                resolve(response);
            })
            .error(error => {
                reject(error);
            })
            .get()
    });
}


export default {
    getWorker,
    getCategory,
    saveAward,
    getPendingRequest,
    setRequestAction,
    getFreeWorkers,
    setRequestEditAction,
    getAwardByWorker,
    login,
    setRequestChangedAction,
    getPendingChangedRequest
}