import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    displayValue:{
        fontSize: 80
    }
})

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue}>{props.value}</Text>
    </View> 