// in src/authClient.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import {simpleRestClient, fetchUtils} from 'admin-on-rest';
import {REACT_APP_API_HOST} from './Configration';
import { AUTH_GET_PERMISSIONS } from 'aor-permissions';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {

        const { username, password } = params;
        const request = new Request(`${REACT_APP_API_HOST}/api/Accounts/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ status, role }) => {
                localStorage.setItem('status', status);
                localStorage.setItem('username', username);
                localStorage.setItem('role', role);
                return Promise.resolve(status);
            })
            .catch((e) => {
                console.error(e);
                return Promise.reject();
            });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('status');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('status');
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('status') == 'ok' ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        return Promise.resolve(localStorage.getItem('role'));
    }
    return Promise.reject('Unknown method');
};