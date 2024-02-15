import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import {  } from 'react-native-web'

const Fallback = () => {
    return (
        <View style={{alignItems:"center"}}>
            <Image source={require("../../assets/todo.png")} style={{ width: 340, height: 310 }} />
            <Text style={{fontSize:20 , fontWeight:"bold", marginTop:40}}>Start Adding Your Task</Text>
        </View>
    )
}

export default Fallback

const styles = StyleSheet.create({});