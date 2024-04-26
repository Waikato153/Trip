import { TouchableOpacity, View, Image, Text } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { useNavigation } from '@react-navigation/native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
   
} from '@react-native-google-signin/google-signin';
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/user";
import { set } from "firebase/database";
import { useState } from "react";

import { isErrorWithCode } from '@react-native-google-signin/google-signin';
import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { webConfig } from "../config/google";


GoogleSignin.configure(webConfig);



export default function WelcomeScreen() {
    const navigation = useNavigation();


    const dispatch = useDispatch();
    // Somewhere in your code
    const _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
            await signInWithCredential(auth, googleCredential);
        } catch (error) {
            console.log(error)
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        // user cancelled the login flow
                        break;
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // play services not available or outdated
                        break;
                    default:
                    // some other error happened
                }
            } else {
                // an error that's not related to google sign in occurred
            }
        }
    };

    const [isInProgress, setInProgress] = useState(false);

    return (
        <ScreenWrapper>
            <View className="h-full flex justify-around">
                <View className="flex-row justify-center">
                    <Image source={require('../assets/images/welcome.gif')} />
                </View>

                <View className="mx-5 mb-10">
                    <Text className={`text-center font-bold text-4xl ${colors.heading} mb-8`}>Expensify</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signin')} className="shadow p-3 rounded-full mb-5" style={{ backgroundColor: colors.button }}>
                        <Text className="text-center text-white text-lg font-bold ">Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')} className="shadow p-3 rounded-full  mb-5" style={{ backgroundColor: colors.button }}>
                        <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {_signIn()}} className="shadow p-3 rounded-full bg-white mb-1">
                        <View className="flex-row justify-center items-center space-x-3">
                            <Image source={require('../assets/images/googleIcon.png')} className="w-6 h-6"/>
                            <Text className="text-center text-gray-600 text-lg font-bold">Sign In With Google</Text>
                        </View>
                        
                    </TouchableOpacity>
 

                </View>



            </View>
        </ScreenWrapper >
    )
}