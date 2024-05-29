import { View, Text } from 'react-native';
import React from 'react';
import { HankenGrotesk_400Regular, useFonts } from "@expo-google-fonts/hanken-grotesk";
import { Image } from 'react-native'

type Props = {};

const Banner = (props: Props) => {
  const [fontsLoaded] = useFonts({
    HankenGrotesk_400Regular,
  });

  if(!fontsLoaded){
    return null; 
  }

  return (
    <View className="w-screen h-1/6 absolute top-1/4 flex items-center justify-center">
      <View className="w-9/10 h-16 items-center justify-center flex mb-8"> 
      <Image
          source={require('../../assets/Highlight_Primary.png')}
          style={{ width: 75, height: 75}}
          resizeMode="contain"
        />  
        </View>
      <Text className = "font-black text-black text-5xl text-center" style={{fontFamily: "HankenGrotesk_400Regular"}}>
        where knowledge begins
      </Text>
    </View>
  );
};

export default Banner;