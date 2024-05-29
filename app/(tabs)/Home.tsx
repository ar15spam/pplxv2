import { MotiView, MotiText, AnimatePresence } from "moti"
import { Text, View, Pressable, FlatList } from "react-native"

import Search from "../../components/LandingPage/Search"
import Banner from "../../components/LandingPage/Banner"
import Suggestions from "../../components/LandingPage/Suggestions"
import LandingButtons from "../../components/LandingPage/LandingButtons"

type Props = {}

const Home = (props: Props) => {

  return (
    <MotiView className = "w-screen h-screen flex bg-white items-center bottom-5">
      <Banner />
      <Suggestions />
      <Search />
    </MotiView>
  )
}

export default Home