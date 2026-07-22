import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

const index = () => {
  const router = useRouter()
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Click The demo button</Text>
     <TouchableOpacity
     onPress={()=>router.push('/(auth)/login')}
     className="bg-[#1e1e1e] rounded-full py-4 px-12 flex-row items-center justify-center gap-3 border border-gray-800 active:opacity-80">
              
              <Text className="text-gray-200 text-base font-medium">Next</Text>
            </TouchableOpacity>
    </View>
  )
}

export default index