import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default () => {
    return(
        <Tabs screenOptions={{ headerShown: false}}>
            <Tabs.Screen name="Home"
            options={{ tabBarIcon: () => <Ionicons name="search" size={24} color="black" />, tabBarInactiveTintColor: "rgb(41,41,39)"}}
            
            />
            <Tabs.Screen name="Discover"
            options={{ tabBarIcon: () => <Ionicons name="compass-outline" size={24} color="black" />, tabBarInactiveTintColor: "rgb(41,41,39)" }}
            
            />
            <Tabs.Screen name="Library" 
            
            />
        </Tabs>
    )
}