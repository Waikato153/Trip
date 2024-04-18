import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import ScreenWrapper from "../components/screenWrapper";

import { colors, items, categoryBG,itemsExpense} from "../theme/index"
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import { useNavigation } from '@react-navigation/native';
import ExpenseCard from "../components/ExpenseCard";
import BackButton from "../components/backButton";


export default function TripExpenseScreen(props) {
    const navigation = useNavigation();
    let params = props.route.params;

    return (
        <ScreenWrapper className="flext-1" >
            <View className="px-4">
                <View className="mt-4">
                    <View className="absolute top-2 left-0 z-10">
                        <BackButton />
                    </View>
                    <View>
                        <Text className={`${colors.heading} text-xl font-bold text-center`}>{params.country}</Text>
                        <Text className={`${colors.heading} text-xs text-center`}>{params.place}</Text>
                    </View>

                </View>

                <View className="flex-row justify-center items-center rounded-xl mb-4">
                    <Image source={require('../assets/images/7.png')} className="w-80 h-80"></Image>
                </View>

                <View className="space-y-3" >
                    <View className="flex-row justify-between items-center">
                        <Text className={`${colors.heading} font-bold text-xl`}>Expense</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AddExpense')} className="p-2 px-3 bg-white border-gray-200 rounded-full">
                            <Text>Add Expense</Text>
                        </TouchableOpacity> 
                    </View>


                    <View style={{ height: 330 }}>
                        <FlatList
                            ListEmptyComponent={<EmptyList message="You haven't recorded any expense yet" />}
                            data={itemsExpense}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            className="mx-1"
                            renderItem={({ item }) => {
                                return (
                                    <ExpenseCard item={item} />
                                )

                            }}
                        />
                    </View>
                </View>
            </View>
            
        </ScreenWrapper>

    )
}