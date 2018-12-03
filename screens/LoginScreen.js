import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage,Image} from 'react-native';
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

                <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://images.upwardly.in/cloudinary/wealth-building/conservative.png?width=100'}}
        />


                <Text>Login scr</Text>
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