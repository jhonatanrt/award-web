import HttpServices from './HttpServices';
import CONSTANTS from '../util/constants';

const signIn = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(CONSTANTS.LOGIN_URL)
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

const signUp = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(CONSTANTS.SIGNUP_URL)
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

const signInFacebook = (body) => {
    return new Promise((resolve, reject) => {
        (new HttpServices()).setUrl(CONSTANTS.SIGNIN_FACEBOOK_URL)
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
    signIn,
    signUp,
    signInFacebook,
}