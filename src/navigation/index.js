import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline,UserIcon as UserOutline } from 'react-native-heroicons/outline';
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={HomeTabs} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
function HomeTabs(){
    return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => menuIcons(route, focused),
          tabBarStyle: {
            marginBottom:80,
            height: 58,
            alignItems: 'center',
            
            borderRadius:30,
            marginHorizontal: 20,
            backgroundColor: '#ffffff',
  
          },
          tabBarItemStyle: {
            marginTop: 30,
            
          },
         tabBarActiveBackgroundColor: "#D9F5EE",
        })}
        
        >
        <Tab.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{
          tabBarActiveBackgroundColor: '#D9F5EE',
          tabBarItemStyle:{
            height: 40,
            borderRadius: 50,
            marginTop: 9,
            marginLeft: 10,
          },
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused?
               <View className='bg-[#D9F5EE] flex-row justify-center items-center mx-2'>
                <HomeOutline size="30" color="#7BC4B2"/> 
                <Text className='text-[#7BC4B2]'>Home</Text>
               </View>
               : <HomeOutline size="30" strokeWidth={2} color="#C4C4C4" />}
            </View>
          )
        }}
      />
        <Tab.Screen 
        name="Product" 
        component={ProductScreen}
        options={{
          tabBarActiveBackgroundColor: '#D9F5EE',
          tabBarItemStyle:{
            height: 40,
            borderRadius: 50,
            marginTop: 9,
            marginLeft: 10,
          },
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused?
               <View className='bg-[#D9F5EE] flex-row justify-center items-center mx-2'>
                <HeartOutline size="30" color="#7BC4B2"/> 
                <Text className='text-[#7BC4B2]'>Product</Text>
               </View>
               : <HeartOutline size="30" strokeWidth={2} color="#C4C4C4" />}
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="cart" 
        component={WelcomeScreen}
        options={{
          tabBarActiveBackgroundColor: '#D9F5EE',
          tabBarItemStyle:{
            height: 40,
            borderRadius: 50,
            marginTop: 9,
            marginLeft: 10,
          },
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused?
               <View className='bg-[#D9F5EE] flex-row justify-center items-center mx-2'>
                <BagOutline size="30" color="#7BC4B2"/> 
                <Text className='text-[#7BC4B2]'>Cart</Text>
               </View>
               : <BagOutline size="30" strokeWidth={2} color="#C4C4C4" />}
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="profile" 
        component={WelcomeScreen}
        options={{
          tabBarActiveBackgroundColor: '#D9F5EE',
          tabBarItemStyle:{
            height: 40,
            borderRadius: 50,
            marginTop: 9,
            marginRight: 10,
          },
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused?
               <View className='bg-[#D9F5EE] flex-row justify-center items-center mx-2'>
                <UserOutline size="30" color="#7BC4B2"/> 
                <Text className='text-[#7BC4B2]'>Profile</Text>
               </View>
               : <UserOutline size="30" strokeWidth={2} color="#C4C4C4" />}
            </View>
          )
        }}
      />
        
      </Tab.Navigator>
    )
  }
export default AppNavigation;