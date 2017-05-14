import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers/'

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App