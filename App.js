import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text,Button,View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";

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

const Main=()=>{
  return (<Tabs.Navigator>
    <Tabs.Screen 
      name="Home"
       component={Home}
       options={{
        //...props yaparak bütün styles'ları kendisinin oluşturduklarını, içine yüklüyor ve kullanabilir bir hale geliyor
        tabBarIcon:(props)=><Ionicons name="ios-home" {...props}/>
       }}/>
    <Tabs.Screen name="Profile"  component={profileStack} options={{
      title:'Profile',
      headerShown:false,
      tabBarIcon:(props)=><Ionicons name="ios-person" {...props}/>
      }}/>
  </Tabs.Navigator>);
};


const About = ()=>{
  return (<Text>AboutScreen</Text>);
};

const Drawe = createDrawerNavigator();
const App=()=>{
  return <NavigationContainer>
<Drawe.Navigator>
  <Drawe.Screen name="Main" component={Main}/>
  <Drawe.Screen name="About" component={About}/>
</Drawe.Navigator>
  </NavigationContainer>;
};


export default App;