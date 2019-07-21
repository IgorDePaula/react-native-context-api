import React from 'react'

import {ActivityIndicator} from 'react-native'

const Loading = ({ loading, message }) => {
    return loading ? (
        <ActivityIndicator color={message} ></ActivityIndicator>
    ) : null
}

export default Loading
