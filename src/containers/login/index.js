import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import {PRIMARY_COLOR, SUB_COLOR, INPUT_STYLE} from '../../asset/styles';


function Login(props) {
    return (
        <SafeAreaView style={styles.loginContainer}>
            <Image source={require("../../asset/mario.png")} style={{width: 100,height: 100}}></Image>
            <Text >Login</Text>
            <TextInput placeholder="Username" keyboardType="default" style={INPUT_STYLE}></TextInput>
            <TextInput placeholder="Password" keyboardType="number-pad" secureTextEntry={true} style={styles.inputStyle}></TextInput>
            

            <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                <Text>Login Here</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text>Sign up now!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles ={
    loginContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "skyblue",
    },

    inputStyle: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 20,
        width: "50%",
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal:20,
    }
}
export default Login;