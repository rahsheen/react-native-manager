import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers/'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBUpOV71o4IIWoq_utZSRxwzo2QHiZy2BM",
            authDomain: "manager-dc9b9.firebaseapp.com",
            databaseURL: "https://manager-dc9b9.firebaseio.com",
            projectId: "manager-dc9b9",
            storageBucket: "manager-dc9b9.appspot.com",
            messagingSenderId: "368288911203"
        }

        firebase.initializeApp(config)
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App