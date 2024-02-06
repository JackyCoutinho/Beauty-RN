import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import{categories, productItems, popularItems} from '../constants'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const ProductScreen = () => {
    const navigation= useNavigation()
  return (
<View>
<StatusBar style='black'/>
    <SafeAreaView>
    <Text className='text-black mt-7 ml-9 text-2xl font-semibold'>Products</Text>

        <View className="px-5">
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="absolute left-2 w-[30%]"
            renderItem={({item})=>{
              return (
                <TouchableOpacity 
                    className="justify-center items-center mt-3">
                    <View className='w-[100] justify-center items-center space-y-2'>
                        <Image source={item.image} className='w-6 h-6'/>
                        <Text className={"font-semibold text-[#C4C4C4]"}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
              )
            }}
          />
         <ScrollView horizontal className='flex-row space-x-5 mt-3 ml-[130]'>
                <View className='bg-[#B6E7DA] rounded-2xl w-[185] h-[301]'>
                    <View className='ml-3 mt-3'>
                        <Text className='text-bold p-1'>Name product name product ml</Text>
                        <Image source={require('../../assets/images/brand.png')}
                        className='ml-5'/>
                        <View className='flex-row justify-between items-center mt-3 mr-3'>
                            <Text className='text-[#EB5757]'>$7.7</Text>
                            <AntDesign name="hearto" size={24} color="white"/>
                        </View>
                    </View>
                </View>
                <View className='bg-[#D2E3F5] rounded-2xl flex-row w-[185] h-[301]'>
                    <View className='ml-3 mt-3 '>
                        <Text className='text-bold p-1'>Name product name product ml</Text>
                        <Image source={require('../../assets/images/brands.png')}
                        className='ml-5 mt-4'/>
                       <View className='flex-row justify-between items-center mt-3 mr-[-15]'>
                            <Text className='text-[#EB5757]'>$8</Text>
                            <AntDesign name="hearto" size={24} color="white"/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View className='flex-row justify-between items-center mt-6 mr-7 ml-6'>
            <Text className='text-black text-2xl font-semibold '>Most Populer</Text>
            <Text className='text-[#7BC4B2] font-bold  '>See All</Text>
        </View>

        <View className="px-5 mt-[40]">
          <FlatList 
            showsVerticalScrollIndicator={false}

            className='mx-4'
            data={popularItems}
            keyExtractor={item=> item.id}
            renderItem={({item})=>{
              return (
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Detail',{...item})}
                    className="flex-row mb-4"
                > 
                    <View className={"w-[104] h-[104] justify-normal items-center rounded-2xl bg-[" + item.backgroud + "]"}>
                        <Image className='w-[49]h-[94]' source={item.image}/>   
                    </View>

                    <View className='justify-between ml-3 w-[65%]'>
                        <Text className='mt-2 text-xl '>{item.name}</Text>
                        <View className='flex-row justify-between'>
                            <Text className='text-[#E50001] font-bold '>${item.price}</Text>
                            <AntDesign name="hearto" size={24} color="red"/>
                        </View>
                    </View>

                </TouchableOpacity>
                        
                    


              )
            }}
          />
        </View>
            
    </SafeAreaView>
                        
                  
              
      
</View>
    )
  }
  
  export default ProductScreen
  