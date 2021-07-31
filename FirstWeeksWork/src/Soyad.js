import React, { Component } from "react"
import { View, Text, TextInput } from 'react-native'

class Soyad extends Component {

    render() {
        const props = this.props
        const { stil } = props
        return (
            <View
                style={{
                    width: '80%',
                    marginTop: stil.ustBosluk
                    
                }}>


                <TextInput
                    value='Password '
                    style={{
                        color: stil.renk,
                        fontWeight: 'bold',
                        fontColor: 'red',
                        fontSize: 20,
                        backgroundColor: 'white',
                        borderRadius: 3,
                        padding: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: '100%',
                        marginTop: '3%',
                        alignSelf: 'center',
                        marginTop:0
                    }}

                />

            </View>
        )
    }

}

export { Soyad }