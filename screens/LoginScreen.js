import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage} from 'react-native';
import { TextField } from 'react-native-material-textfield';

class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            phone:''
        };
    }

    SignIn = async () => {
        await AsyncStorage.setItem("userToken", "Nitin");
        this.props.navigation.navigate("App");
    };

    render(){
        let { phone } = this.state;
        return  (
            <View style={styles.container}>

      


                <Text>Login screen</Text>
                <Button
                onPress={()=>this.SignIn()}
                title="Login"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
                <Button
                title="Register"
                onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})