import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, Image} from 'react-native';

function Register () {

    const [name,setName] = useState("");
    

    const displayName = () => {
     console.log(name)
        
    }
    return (
        <SafeAreaView style={styles.loginContainer}>
            <Image source={require("../../asset/logo.jpg")} style={{width: 100,height: 100}}></Image>
            <Text>Register</Text>
            <TextInput placeholder="Username" keyboardType="default" style={styles.inputStyle} onChangeText={(val) => setName(val)}></TextInput>
            <Text>{name}</Text>
            <TextInput placeholder="Email" keyboardType="default" style={styles.inputStyle}></TextInput>
            <TextInput placeholder="Password" keyboardType="number-pad" secureTextEntry={true} style={styles.inputStyle}></TextInput>
            <TextInput placeholder="Re-type Password" keyboardType="number-pad" secureTextEntry={true} style={styles.inputStyle}></TextInput>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => displayName()  } >
                <Text>Complete Registration</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles ={
    loginContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "lightgreen",
    },

    inputStyle: {
        padding: 15,
        paddingBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: "50%",
        marginTop: 20,
      
        marginHorizontal:20,
    },

    buttonStyle: {
        padding: 10,
        border: "1px solid black",
        borderRadius: "30px",
        marginTop: "30px",
    }
}
export default Register;