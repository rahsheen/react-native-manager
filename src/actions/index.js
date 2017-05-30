import firebase from 'firebase'
import { google } from 'react-native-simple-auth'
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_CREDENTIALS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}

export const googleLogin = () => {
    return dispatch => {
        dispatch({ type: LOGIN_USER })

        google({
            appId: '484896703731-s31cjcqcd5put1eev7g6dhn2jsqcpvda.apps.googleusercontent.com',
            callback: 'biz.sheenonline:/oauth2redirect',
        }).then(info => {
            // info.user - user details from the provider
            // info.pcredentials - tokens from the provider
            loginUserSuccess(dispatch, info.user)

            dispatch({
                type: LOGIN_USER_CREDENTIALS,
                payload: info.credentials
            })

        }).catch(error => {
            // error.code
            // error.description
            console.log(error.description)
        });

    }
}