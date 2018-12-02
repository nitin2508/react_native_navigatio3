import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

class RegisterScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Registerss Screens</Text>
            </View>
        )
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})