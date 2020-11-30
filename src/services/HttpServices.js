// @ts-check
export default class HttpService {
  url;
  body;
  successCallback;
  errorCallback;
  headersCallback;

  setUrl(url) {
    this.url = url;
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  headers(callback) {
    this.headersCallback = callback;
    return this;
  }

  success(callback) {
    this.successCallback = callback;
    return this;
  }

  error(callback) {
    this.errorCallback = callback;
    return this;
  }

  post() {
    const { url, headersCallback, errorCallback, successCallback, body } = this;
    const token = localStorage.token;
    const auth = (token ? `Basic ${token}` : undefined);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(
        auth ? { 'Authorization': auth } : {}
      )
    };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
      .then(response => {
        headersCallback && headersCallback(response.headers);
        if (response.status == 401 || response.status == 403) {
          localStorage.removeItem('token');
          alert('UNAUTHORIZED!');
        }
        return response.json()
      })
      .then(responseJson => {
        successCallback(responseJson)
      })
      .catch(requestPostError => {
        console.log({ requestPostError, url });
        errorCallback(requestPostError)
      });
  }

  get() {
    const { url, headersCallback, errorCallback, successCallback } = this;
    const token = localStorage.getItem('token');
    const auth = (token ? `Basic ${token}` : undefined);
    const headers = {
      'Accept': 'application/json,application/stream+json',
      'Content-Type': 'application/json,application/stream+json',
      ...(
        auth ? { 'Authorization': auth } : {}
      )
    };
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        successCallback(responseJson)
      })
      .catch(requestGetError => {
        console.log({ requestGetError, url });
        errorCallback(requestGetError)
      });
  }
}