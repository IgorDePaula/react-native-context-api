import React, { Component, Fragment } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { getUsers } from '../services/api'
import Loading from './Loading'
export default class Users extends Component {

    state = {
        loading: false
    }

    getUsers = async () => {
        const { showLoading, hideLoading } = this.props

        showLoading('#ff00FF')
        const response = await getUsers().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    render() {


        return (
            <Fragment>
                <TouchableOpacity onPress={this.getUsers}>
                    <Text>Buscar usuários</Text>
                </TouchableOpacity>
            </Fragment>
        )
    }
}
