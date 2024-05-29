import React from "react";
import { MotiView, MotiText } from "moti";
import { View } from "react-native";

type Props = {};

const LandingButtons = (props: Props) => {

  return (
    <View className = "absolute bottom-19percent w-screen h-1/4 items-center justify-center flex">
      <MotiView className = "w-9/10 h-4/5 bg-black rounded-xl items-center justify-center">
        <MotiText className = "text-white font-black text-3xl">
          as you search, we will create an interactive graph for you to help make sense out of your ideas!
        </MotiText>
      </MotiView>
    </View>
  );
};

export default LandingButtons;