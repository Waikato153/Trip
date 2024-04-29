import { TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import BackButton from "../components/backButton";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import { store } from "../redux/store";
import { setSnackVisible, setUserLoading } from "../redux/slice/user";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import Loading from "../components/loading";
import SnackCommon, { showSnack } from "../components/snackBar";


export default function SigninScreen() {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        
        
        if (email && password) {
            console.log(email, password)
            dispatch(setUserLoading(true));
            try {
                
                await signInWithEmailAndPassword(auth, email, password)
            } catch (e) {
                console.log(e)
                showSnack('');
            }
            dispatch(setUserLoading(false));
        } else {
            showSnack();
        }
    }

    const userLoadig = useSelector(state => state.user.userLoading);


    return (
        <ScreenWrapper>
            <SnackCommon />
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
                        <TextInput value={email} onChangeText={value => { setEmail(value) }} className='p-4 bg-white rounded-full mb-3' />
                        <Text className={`${colors.heading} text-lg font-bold`}>Password</Text>
                        <TextInput value={password} secureTextEntry onChangeText={value => { setPassword(value) }} className='p-4 bg-white rounded-full mb-3' />

                    </View>
                    <TouchableOpacity className="flex-row justify-end">
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View>
                        {
                            userLoadig ? (<Loading />) : (
                                <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: colors.button }} className="my-6 rounded-full p-3 shadow-sm mx-2">
                                    <Text className="text-center text-white text-lg font-bold">Sign In</Text>
                                </TouchableOpacity>
                            )
                        }


                    </View>
                </View>

            </KeyboardAwareScrollView>
        </ScreenWrapper>

    )
}