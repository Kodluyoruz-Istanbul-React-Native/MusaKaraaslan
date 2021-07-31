import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Soyad } from './Soyad'


class App extends Component {

     stiller = StyleSheet.create({
         view1: {
             flex:1,
            width:100,
         },
         view2: {
             flex: 2,
             width: "50%",
             height:'20%'
         }
    })
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#4267B2",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 80,
                        bottom:100 
                    }}>facebook</Text>
              

                <TextInput
                    value='Email '
                    style={{
                        color: 'grey',
                        fontWeight: 'bold',
                        fontColor: 'red',
                        fontSize: 20,
                        backgroundColor: 'white',
                        borderRadius: 3,
                        padding: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: '80%',
                        marginTop: '3%',
                        marginBottom:-9
                    }}

                />

                <Soyad
                    stil={{
                        ustBosluk: 10,
                        renk: 'grey'
                    }} />
                
                <Button
                    style={this.stiller.view2}
                    title="Log In"
                    color='#C0C0C0'

                />
                <Button
                    title='Sign Up for Facebook'
                    color='#4267B2'
                    
                />

            </View>

        )
    }

}

export { App }