import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import ScreenWrapper from "../components/screenWrapper";

import { colors } from "../theme/index"
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { signOut } from "firebase/auth";
import { auth, tripsRef } from "../config/firebase";
import { useSelector } from "react-redux";
import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function HomeScreen() {

    const navigation = useNavigation();

    const { user } = useSelector(state => state.user);

    const [trips, setTrips] = useState([]);

    const fetchTrip = async () => {
        const q = query(tripsRef, where('userId', '==', user.uid));
        const querySnapshop = await getDocs(q);
        let data = [];
        querySnapshop.forEach(ele => {
            data.push({ ...ele.data(), id: ele.id })
        })
        console.log(data)

        setTrips(data);
    }

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused)
            fetchTrip();
    }, [isFocused]);

    const handleLogout = async () => {
        await signOut(auth);
    }

    return (
        <ScreenWrapper className="flext-1" >
            <View className="flex-row justify-between items-center p-4">
                <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Extensify</Text>
                <TouchableOpacity onPress={handleLogout} className="p-2 px-3 bg-white border-gray-20 rounded-full">
                    <Text className={colors.heading}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
                <Image source={require('../assets/images/banner.png')} className="w-60 h-60"></Image>
            </View>

            <View className="px-4 space-y-3" >
                <View className="flex-row justify-between items-center">
                    <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddTrip')} className="p-2 px-3 bg-white border-gray-20 rounded-full">
                        <Text>Add Trip</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 310 }}>
                    <FlatList
                        ListEmptyComponent={<EmptyList message="You haven't recorded any trips yet" />}
                        data={trips}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{
                            justifyContent: 'space-'
                        }}
                        className="mx-1"
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('expenseTrip', { ...item })} className="bg-white rounded-2xl mb-3 shadow-sm p-3">
                                    <View>
                                        <Image source={randomImage()} className="w-36 h-36 mb-2" />
                                        <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                        <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                                    </View>

                                </TouchableOpacity>
                            )

                        }}
                    />
                </View>
            </View>
        </ScreenWrapper>

    )
}