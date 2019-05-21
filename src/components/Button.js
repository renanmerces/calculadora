import React from 'react'
import {Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
        color: 'white',
        backgroundColor: 'blue', 
        fontSize: 35,
        padding: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        textAlign: 'center',
    },
    operation:{
        color: '#FFF',
        backgroundColor: 'red'
    },
    buttonDouble:{
        width: (Dimensions.get('window').width/4)*2
    },    
    buttonTriple:{
        width: (Dimensions.get('window').width/4)*3
    }
})

export default props => {
    let funcao = [styles.button]

    if(props.operation)
        funcao.push(styles.operation)
    else if(props.clear)
        funcao.push(styles.buttonTriple)
    else if(props.zero)
        funcao.push(styles.buttonDouble)

    return(
    <TouchableHighlight onPress={props.onClick}>
        <Text style={funcao}>{props.label}</Text>         
    </TouchableHighlight>)
}
