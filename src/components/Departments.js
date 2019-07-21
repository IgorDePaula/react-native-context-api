import React, { Component, Fragment } from 'react'

import { getDepartments } from '../services/api'
import { TouchableOpacity, Text } from 'react-native'
import Loading from "./Loading";
class Departments extends Component {

    state = {
        loading: false
    }
    getDepartments = async () => {
        const { showLoading, hideLoading } = this.props
        showLoading('#00dd33')
        const response = await getDepartments().then(res=>{
            hideLoading()
        })
        console.log({ response })
    }

    render() {
        return (

            <Fragment>
                <TouchableOpacity onPress={this.getDepartments}>
                    <Text>Buscar departamentos</Text>
                </TouchableOpacity>
            </Fragment>
        )
    }
}

export default Departments
