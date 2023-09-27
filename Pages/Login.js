import React from "react";
import {View, Text,SafeAreaView, TextInput, TouchableOpacity} from "react-native"

const LoginScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
        <View style={{paddingLeft:15}}>
            <Text style={{fontSize:24}}>Login</Text>
            <View style={{marginTop:10, borderBottomWidth:1, borderBottomColor:"#ccc",padding:10,paddingBottom:5,marginBottom:10}}>
            <TextInput  placeholder='Email Id' keyboardType='email-address'/>
            </View>
            <View style={
              {marginTop:10, 
              borderBottomWidth:1, 
              borderBottomColor:"#ccc",
              padding:10,
              paddingBottom:5,
              marginBottom:25, 
              flexDirection:'row',
              justifyContent:"space-between"}
              }>
            <TextInput  placeholder='Password' secureTextEntry={true}/>
            <TouchableOpacity onPress={() => {}}> 
            <Text style={{color:"#AD40AF", fontWeight:'700'}}>Forgot?</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{backgroundColor:"#AD40AF",padding:20,marginRight:10,borderRadius:20}}>
            <Text style={{color:'#fff',fontWeight:'700',textAlign:'center',fontSize:16}}>Login</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center',margin:20}} >or Login with </Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text >Don't have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                <Text style={{color:'#AD40Af',fontWeight:700}}>Register</Text>
            </TouchableOpacity>
            </View>
        </View>    
        </SafeAreaView>
    );
};

export default LoginScreen;

