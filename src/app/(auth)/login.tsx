import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
// SafeAreaView-এর বদলে useSafeAreaInsets হুক ইম্পোর্ট করুন
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const insets = useSafeAreaInsets(); // স্ক্রিনের Safe Area Insets নিয়ে আসবে

  return (
    <LinearGradient
      colors={['#0f2922', '#000000', '#081a14']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <StatusBar barStyle="light-content" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        className="flex-1 justify-center px-6"
      >
        {/* Header Section */}
        <View className="items-center mb-10">
          <Text className="text-4xl font-extrabold tracking-widest">
            <Text className="text-white">Welcome </Text>
            <Text className="text-[#00FFA6]">Back</Text>
          </Text>
        </View>

        {/* Input Fields */}
        <View className="flex flex-col gap-4">
          <TextInput
            placeholder="Enter Your email or phone"
            placeholderTextColor="#6b7280"
            className="bg-[#1e1e1e] text-white px-5 py-4 rounded-2xl border border-gray-700/60 text-base font-medium"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            placeholder="Enter Your password"
            placeholderTextColor="#6b7280"
            className="bg-[#1e1e1e] text-white px-5 py-4 rounded-2xl border border-gray-700/60 text-base font-medium"
            secureTextEntry
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-white rounded-full py-4 mt-8 items-center active:opacity-90">
          <Text className="text-black font-semibold text-lg">Log in</Text>
        </TouchableOpacity>

        {/* Forgot Password & Sign Up */}
        <View className="flex-row justify-center mt-4 gap-2">
          <Text className="text-gray-300 font-medium">Forgotten password?</Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-medium">Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* OR Divider */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-px bg-gray-600/60" />
          <Text className="text-gray-400 px-4 font-medium">OR</Text>
          <View className="flex-1 h-px bg-gray-600/60" />
        </View>

        {/* Social Login Buttons */}
        <View className="flex flex-col gap-4">
          <TouchableOpacity className="bg-[#1e1e1e] rounded-full py-4 flex-row items-center justify-center gap-3 border border-gray-800 active:opacity-80">
            <AntDesign name="google" size={20} color="#DB4437" />
            <Text className="text-gray-200 text-base font-medium">Continue With Google</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#1e1e1e] rounded-full py-4 flex-row items-center justify-center gap-3 border border-gray-800 active:opacity-80">
            <FontAwesome5 name="facebook" size={20} color="#1877F2" />
            <Text className="text-gray-200 text-base font-medium">Continue With Facebook</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </LinearGradient>
  );
}