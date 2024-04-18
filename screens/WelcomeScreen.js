import { TouchableOpacity, View, Image, Text } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
    <ScreenWrapper>
    <View className="h-full fex justify-around">
        <View className="flex-row justify-center mt-10">
            <Image source = {require('../assets/images/welcome.gif')} />
        </View>

        <View className="mx-5 mb-20">
            <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>Expensify</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('signin')} className= "shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}>
                <Text className="text-center text-white text-lg font-bold ">Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('signup')} className= "shadow p-3 rounded-full" style={{backgroundColor: colors.button}}>
                <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>
        </View>


        
    </View>
    </ScreenWrapper >
)
}