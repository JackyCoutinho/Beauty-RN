import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Feather, Fontisto,Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View className='bg-[#7BC4B2] flex-1'>
        <StatusBar style='dark'/>

        <SafeAreaView>
            {/* Perfil da pessoa + carrinho de compra e sino de notificação */}
        <View className='flex-row justify-between items-center p-3 mx-5 mt-4'>
            <View className='flex-row gap-3'>
                <Image source={require('../../assets/images/profile.png')}
                className='className="w-[50] h-[40]'/>
                <Text className='font-semibold text-white text-3xl'>Hi, Jessie</Text>
            </View>
            <View className='flex-row gap-4 '>
                <Feather name="shopping-cart" size={30} color="white" />
                <Fontisto name="bell" size={30} color="white" />
            </View>
        </View>
        <View className=' bg-[#FFFFFF] rounded-3xl h-full '>
            {/* Barra de pesquisa */}
            <View className=' bg-[#F4F4F4] flex-row rounded-full justify-between items-center mx-8 p-3 mt-7 px-7'>
                <Text className='text-[#C4C4C4] text-xl'>Search</Text>
                <Ionicons name="search-outline" size={30} color='#C4C4C4'/>
            </View>

            {/* Caixa dos melhores produtos (Best seller) */}
            <Text className='text-black mt-7 ml-9 text-2xl font-semibold'>Best seller product</Text>
            <View className='bg-[#FFE491] rounded-xl mx-6 mt-6 flex-row p-2 h-[143]'>
                
                    <Image source={require('../../assets/images/cartbeautys.png')}
                    className='absolute right-0 top-5'/>  
                    <Image source={require('../../assets/images/cartbeauty.png')}
                    className='absolute left-1 bottom-2 '/>  
                    <Image source={require('../../assets/images/beautyoils.png')}
                    className='absolute left-[80]'/>
                    <Image source={require('../../assets/images/beautylips.png')}
                    className='absolute right-[130]'/>
                    <Image source={require('../../assets/images/beautyface.png')}
                    className='absolute right-7 bottom-4'/>
                    <TouchableOpacity onPress={()=> navigation.navigate('Product')} className='rounded-xl bg-[#FCA59B] w-[83] h-[28] items-center justify-center absolute right-4 bottom-4 '>
                        <Text className='text-white'>See More</Text>
                    </TouchableOpacity>
            </View>
            {/* Caixa de consultar o seu problema (concult yout problem) */}
                <Text className='text-black mt-7 ml-9 text-2xl font-semibold'>Concult your problem</Text>
                <View className='bg-[#FCEAD6] rounded-xl mx-6 mt-6 flex-row h-[143]'>
                        <View className='w-[168]'>
                        <Image source={require('../../assets/images/girl.png')}
                        className='absolute top-[-35] left-[-30] '/>
                        </View>
                        <View className='left-[-30]'>
                            <Text className='text-2xl mt-4'>Free skin consultation</Text>
                            <Text className='mt-0 text-sm '>Ask the expert before buy</Text>
                            <Text className='mt-0 text-sm '>skincare product.</Text>
                        </View>
                        <View className='rounded-xl bg-[#FECD34] w-[83] h-[28] items-center justify-center absolute right-4 bottom-4 '>
                            <Text className='text-[#222222]'>Get RSVP</Text>
                        </View>
                </View>
        {/* Caixa de melhores produtos (best product) */}
            <Text className='text-black mt-7 ml-9 text-2xl font-semibold'>Best product</Text> 
            <View className='flex-row justify-between items-center gap-1 ml-5 mt-5'>
                <View className='bg-[#FECDCD] rounded-xl mx-4 flex-row  w-[120] h-[143]'>
                </View>
                <View className='bg-[#B6E7DA] rounded-xl mx-4 flex-row  w-[120] h-[143]'>
                </View>
                <View className='bg-[#D2E3F5] rounded-xl mx-4 flex-row  w-[120] h-[143]'>
                </View>
            </View>
            
        </View>
            {/* Fim da View */}
        
        </SafeAreaView>
    
    </View>
  )
}

export default WelcomeScreen