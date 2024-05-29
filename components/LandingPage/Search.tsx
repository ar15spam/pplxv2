import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const Search = (props: Props) => {

  return (
    <View className = "w-9/10 h-14 bg-black rounded-3xl absolute bottom-28 flex items-center justify-center px-10">
        <View className = "absolute left-6">
            <Ionicons name="images" size={24} color="white"/>
        </View>
        <Text className = "text-white font-bold text-xl ">
            Ask anything...
        </Text>
        <View className = "absolute right-6">
            <Ionicons name="mic-sharp" size={24} color="white"/>
        </View>
    </View>
  )
}
export default Search

//plan is to make a typing search animation and then also build custom search opening thing and mic menu thing and photo library etc...