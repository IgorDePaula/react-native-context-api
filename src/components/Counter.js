import React, {Component, Fragment} from 'react'

import {TouchableOpacity, Text} from 'react-native'

class Counter extends Component {


    render() {

        const {increment, decrement, counter} = this.props
        return (

            <Fragment>
                <TouchableOpacity onPress={increment}>
                    <Text>Incrementar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrement}>
                    <Text>Decrementar</Text>
                </TouchableOpacity>
                <Text>
                    {counter}
                </Text>
            </Fragment>
        )
    }
}

export default Counter
