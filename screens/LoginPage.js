import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from "react-native-elements";

const LoginPage = ({ navigation }) => {


    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const [touched, onTouched] = React.useState({
        text: false,
        number: false,
    });


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            {/* <StatusBar style="Light" /> */}
            {/* <Image
                source={{ uri: "https://www.seekpng.com/png/detail/377-3771044_advanced-ip-scanner-logo-advance-ip-scanner-icon.png" }}
                style={{ width: 200, height: 200 }}
            /> */}
            <Text style={styles.header}>Welcome !</Text>
            <View style={styles.inputContainer}>

                <Text style={styles.text}>Phone*</Text>

                <TextInput
                    style={{ ...styles.input, borderColor: phone != "" || !touched.text ? '#dbd3d3' : '#ed6464' }}
                    onChangeText={(e) => {
                        setPhone(e);
                        onTouched(state => ({ ...state, text: true }))
                    }}
                    value={phone}

                />
                <Text style={styles.text}>OTP*</Text>
                <TextInput
                    style={{ ...styles.input, borderColor: otp != "" || !touched.text ? '#dbd3d3' : '#ed6464' }}
                    onChangeText={(e) => {
                        setOtp(e);
                        onTouched(state => ({ ...state, text: true }))
                    }}
                    value={otp}
                    keyboardType="numeric"
                    secureTextEntry
                />

            </View>
            <Button
                onPress={() => navigation.replace("HomePage")}
                containerStyle={styles.button}
                // onPress={signIn}
                title="Log in" />

            <Button
                // onPress={() => navigation.navigate("Signup")}
                containerStyle={styles.button}
                type="outlined"
                title="Resend OTP" />
            {/* <View style={{ height: 80 }} /> */}

        </KeyboardAvoidingView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },

    inputContainer: {
        width: 300,
    },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 10
    },

    header: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 30
    },
    text: {
        fontSize: 18,
        marginHorizontal: 18
    },

    button: {
        width: 200,
        marginTop: 10,

    }
})
