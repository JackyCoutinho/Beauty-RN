import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import{StarIcon as SatrOutline} from 'react-native-heroicons/outline'
import{ StarIcon as StarSolid} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = (props) => {
    const item = props.route.params
    const navigation = useNavigation()
  return (

    <View className={'bg-['+item.backgroud+'] flex-1'}>
        <StatusBar style='black'/>
        <SafeAreaView>
            <View className='flex-row justify-center'> 
                <TouchableOpacity onPress={()=>navigation.goBack()}className='bg-white absolute top-7 right-8 rounded-lg w-[42] h-[42] justify-center items-center'>
                    <Text className='text-bold text-lg'>X</Text>
                </TouchableOpacity>
                <View className='mt-[120] mr-10'>
                    <Image source={ item.image}
                    className='w-[140] h-[266]'/>
                </View>   
            </View>
            <View className='bg-white w-full h-full'>
                <Text className='text-black mt-7 ml-6 text-xl font-semibold'>{item.name}</Text>
                <Text className=' text-[#C4C4C4] text-lg mt-1 ml-6'>{item.code}</Text>
                <View className='flex-row items-center gap-1 ml-5 mt-3'>
                    <StarSolid size={24} color='#FFB300'/>
                    <StarSolid size={24} color='#FFB300'/>
                    <StarSolid size={24} color='#FFB300'/>
                    <StarSolid size={24} color='#FFB300'/>
                    <StarSolid size={24} color='#FFB300'/>
                    <Text className='font-extrabold text-[#c4c4c4]'>(xx terjual)</Text>
                </View>
                <View className='mt-3 ml-6'>
                    <Text className='text-[#EB5757] font-bold text-lg'>{item.price}</Text>
                </View>
                <View className='space-y-2 ml-2'>
                    <Text className='text-black mt-3 ml-2 text-xl '>Description</Text>
                    <Text className='text-[#888888]'>{item.desc}</Text>
                </View>
                <View className='mt-2 ml-2'>
                    <Text className='text-[#7BC4B2] fond-semibold'>See More</Text>
                </View>
                <View className='space-y-2 ml-2'>
                    <Text className='text-black mt-3 ml-2 text-xl '>Comments</Text>
                </View>
                <View className='flex-row justify-between items-center ml-5 mr-5 mt-4'>
                    <View className=' flex-row bg-white border w-[104] h-[43] border-[#7BC4B2] justify-center items-center rounded-xl ml-3 space-x-4'>
                       <Text className='text-[#7BC4B2] text-2xl'>-</Text>
                       <Text className=' text-xl'>1</Text>
                       <Text className='text-[#7BC4B2] text-2xl'>+</Text>

                    </View>
                    <View className='bg-[#7BC4B2] rounded-xl w-[190] h-[43] justify-center items-center'>
                       <Text className='text-white text-xl font-semibold'>Buy</Text> 
                    </View>
                </View>

                    

            </View>

        </SafeAreaView>
    </View>
  )
}

export default DetailScreen