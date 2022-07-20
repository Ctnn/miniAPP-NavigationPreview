import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text,Button,View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Profile=({navigation})=>{
  
const [user,setUser]=useState("Yiğit");
  return (<View>
    <Text>You have to sign in.</Text>
    <Button title="SignIn" onPress={()=>{
      navigation.navigate("SignIn",{user});
    }}/>
    <Button title="SignUp" onPress={()=>{
      navigation.navigate("SignUp")
    }}/>
    </View>
    );
};


const SignIn=({route})=>{
  return <Text>SignIn {route.params.user}</Text>
};


const SignUp=()=>{
  return <Text>SignUp</Text>
};


const Stack=createNativeStackNavigator();

const profileStack = ()=>{
  return (<Stack.Navigator>
  <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="SignIn" component={SignIn} options={{title:`Sign In`}}/>
  <Stack.Screen name="SignUp" component={SignUp} options={{title:"Sign Up"}}/>
</Stack.Navigator>);
};
 

const Home=()=>{
return (<Text>Home</Text>);
};



const Tabs= createBottomTabNavigator();


const App=()=>{
  return <NavigationContainer>
<Tabs.Navigator>
  <Tabs.Screen name="Home" component={Home}/>
  <Tabs.Screen name="Profile"  component={profileStack} options={{title:'Profile',headerShown:false}}/>
</Tabs.Navigator>
  </NavigationContainer>;
};


export default App;