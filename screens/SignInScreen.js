import { TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import BackButton from "../components/backButton";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function SigninScreen() {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const handleSubmit = () => {
        if (email && password) {
            navigation.navigate('Home')
        } else {
            
        }
    
    }

    return (
        <ScreenWrapper>
             <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View className="flex h-full mx-4">
                <View className="flex flex-row mt-5">
                    <View className="flex-auto">
                        <BackButton />
                    </View>
                    <View className="flex-auto">
                        <Text className={`${colors.heading} text-xl font-bold`}>Sign In</Text>
                    </View>
                </View>


                <View className="flex-row justify-center my-3 mt-5">
                    <Image className="h-72 w-72" source={require('../assets/images/login.png')}></Image>
                </View>
                
                    <View className="space-y-2 mx-2">
                    
                        <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
                        <TextInput value={email} onChangeText={value=>{setEmail(value)}} className='p-4 bg-white rounded-full mb-3' />
                        <Text className={`${colors.heading} text-lg font-bold`}>Password</Text>
                        <TextInput value={password} secureTextEntry onChangeText={value=>{setPassword(value)}} className='p-4 bg-white rounded-full mb-3' />
                       
                    </View>
                    <TouchableOpacity className="flex-row justify-end">
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                
                <View>
                    <TouchableOpacity onPress = {handleSubmit} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                        <Text className="text-center text-white text-lg font-bold">Sign In</Text>
                       
                    </TouchableOpacity>
                </View>
            </View>

            </KeyboardAwareScrollView>
        </ScreenWrapper>
    
)
}