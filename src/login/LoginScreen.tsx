import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

function LoginScreen():JSX.Element{

    return(
        <View style={styles.container}>
            <Image resizeMode='contain' source={require('../assets/images/user.png')} />
        
        
        
<View>
<Text>Login</Text>
<TextInput placeholder="E-mail" placeholderTextColor={"000000"}></TextInput>

</View>
        </View>




    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F76900'
    }
});

export default LoginScreen;