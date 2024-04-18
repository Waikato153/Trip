import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import ScreenWrapper from "../components/screenWrapper";

import { colors, items } from "../theme/index"
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import {useNavigation} from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();
    
    return (
        <ScreenWrapper className="flext-1" >
            <View className="flex-row justify-between items-center p-4">
                <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Extensify</Text>
                <TouchableOpacity className="p-2 px-3 bg-white border-gray-20 rounded-full">
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


                <View style={{height: 330}}>
                    <FlatList 
                    ListEmptyComponent={<EmptyList message="You haven't recorded any trips yet" />}
                    data={items}
                    numColumns={2}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    className="mx-1"
                    renderItem = {({item}) => {
                        return  (
                                <TouchableOpacity onPress={() => navigation.navigate('expenseTrip', {...item})}  className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
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