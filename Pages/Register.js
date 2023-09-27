import React from "react";
import {View, Text,SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import showAlert from "../Components/Alert";
import Feather from "react-native-vector-icons/Feather";
const Register= ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
        <View style={{paddingLeft:15,paddingRight:15}}>
            <Text style={{fontSize:24}}>Register</Text>
            <View style={{marginTop:10,borderBottomWidth:1, borderColor:"#ccc",padding:10,paddingBottom:5,marginBottom:10}}>
            <TextInput  placeholder='Full name'/>
            </View>
            <View style={{marginTop:10, borderBottomWidth:1, borderBottomColor:"#ccc",padding:10,paddingBottom:5,marginBottom:10,flexDirection:'row', justifyContent:'space-between'}}>
            <TextInput  placeholder='Email Id' keyboardType='email-address'/>
            <Feather name="check-circle" color="green" size={20}/>
            </View>
            <View style={
              {marginTop:10, 
              borderBottomWidth:1, 
              borderBottomColor:"#ccc",
              padding:10,
              paddingBottom:5,
              marginBottom:10, 
              flexDirection:'row',
              justifyContent:"space-between"}
              }>
            <TextInput  placeholder='Password' secureTextEntry={true}/>
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
            <TextInput  placeholder='Confirm Password' secureTextEntry={true}/>
            </View>
            <TouchableOpacity onPress={showAlert} style={{backgroundColor:"#AD40AF",padding:20,marginRight:10,marginLeft:10,borderRadius:20}}>
            <Text style={{color:'#fff',fontWeight:'700',textAlign:'center',fontSize:16}}>Register</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center',margin:20}} >or Login with </Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text >Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text style={{color:'#AD40Af',fontWeight:700}}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>    
        </SafeAreaView>
    );
};

export default Register;