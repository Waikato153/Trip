import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors, items } from "../theme/index"
import BackButton from "../components/backButton";
import { useState } from "react";
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from "../components/loading";
import { useSelector } from "react-redux";
import { addDoc } from "firebase/firestore";
import { tripsRef } from "../config/firebase";
import SnackCommon, { showSnack } from "../components/snackBar";


export default function AddTripsScreen() {

    const [place, setPlace] = useState('')

    const [country, setCountry] = useState('')

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false)
    const { user } = useSelector(state => state.user);

    const handleTrip = async () => {
        console.log(place, country)
        if (place && country) {
            setLoading(true);
            try {
                console.log(user.uid)
                let doc = await addDoc(tripsRef, {
                    place,
                    country,
                    userId: user.uid

                });
                console.log(doc)
                if (doc && doc.id) {
                    navigation.goBack();
                }
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
            navigation.navigate('Home')
        } else {
            showSnack();
        }

    }

    return (
        <ScreenWrapper>
            <SnackCommon />
            <KeyboardAwareScrollView>


                <View className="flex h-full mx-4">
                    <View className="flex flex-row mt-5">
                        <View className="flex-auto">
                            <BackButton />
                        </View>
                        <View className="flex-auto">
                            <Text className={`${colors.heading} text-xl font-bold`}>Add Trips</Text>
                        </View>
                    </View>


                    <View className="flex-row justify-center my-3 mt-5">
                        <Image className="h-72 w-72" source={require('../assets/images/4.png')}></Image>
                    </View>

                    <View className="space-y-2 mx-2">

                        <Text className={`${colors.heading} text-lg font-bold`}>Where on Earth?</Text>
                        <TextInput value={place} onChangeText={value => { setPlace(value) }} className='p-4 bg-white rounded-full mb-3' />
                        <Text className={`${colors.heading} text-lg font-bold`}>Which Country?</Text>
                        <TextInput value={country} onChangeText={value => { setCountry(value) }} className='p-4 bg-white rounded-full mb-3' />

                    </View>

                    <View>
                        {
                            loading ? (<Loading />) : (
                                <TouchableOpacity onPress={handleTrip} style={{ backgroundColor: colors.button }} className="my-6 rounded-full p-3 shadow-sm mx-2">
                                    <Text className="text-center text-white text-lg font-bold">Add Trip</Text>

                                </TouchableOpacity>
                            )
                        }


                    </View>
                </View>

            </KeyboardAwareScrollView>
        </ScreenWrapper>
    )
}