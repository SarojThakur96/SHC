import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'

const LandingPage = ({ navigation }) => {

    const image = { uri: "https://img.freepik.com/free-vector/doctor-clinic-illustration_1270-69.jpg?size=338&ext=jpg" };
    return (

        <ImageBackground source={image} style={styles.image}>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Access Newtown Doctors and Health Services Online</Text>
            </View>


            <View style={styles.Button}>
                <Button
                    onPress={() => navigation.navigate('LoginPage')}
                    title="Log In"
                    color="#47c6e6"
                />

            </View>

        </ImageBackground>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    textContainer: {
        width: 300,
        height: 56,
        position: 'absolute',
        bottom: '25%',
        left: '5%',
        zIndex: 100
    },
    Button: {
        // marginTop: '2%'
        position: 'absolute',
        bottom: '10%',
        left: '35%',
        width: '30%',
        borderWidth: 1,
        borderColor: 'white',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
    text: {
        color: "#000000",
        fontSize: 23,
        textAlign: "center",
        // fontFamily: 'Montserrat'

    }
})
