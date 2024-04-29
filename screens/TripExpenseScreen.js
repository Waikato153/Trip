
import { Text, View, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme/index"
import EmptyList from "../components/emptyList";
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ExpenseCard from "../components/ExpenseCard";
import BackButton from "../components/backButton";
import { expenseRef } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setExpenseLoading } from "../redux/slice/loading";
import Loading from "../components/loading";


export default function TripExpenseScreen(props) {
    const navigation = useNavigation();

    const { id, place, country } = props.route.params;

    const [expense, setExpense] = useState([]);


    const { expenseLoading } = useSelector(state => state.loading);
    const dispatch = useDispatch();




    const fetchTrip = async () => {
        dispatch(setExpenseLoading(true));
        const q = query(expenseRef, where('tripId', '==', id));
        const querySnapshop = await getDocs(q);
        let data = [];
        querySnapshop.forEach(ele => {
            data.push({ ...ele.data(), id: ele.id })
        })
        setExpense(data);
        dispatch(setExpenseLoading(false));
    }

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused)
            fetchTrip();
    }, [isFocused]);


    return (
        <ScreenWrapper className="flext-1" >
            <View className="px-4">
                <View className="mt-4">
                    <View className="absolute top-2 left-0 z-10">
                        <BackButton />
                    </View>
                    <View>
                        <Text className={`${colors.heading} text-xl font-bold text-center`}>{country}</Text>
                        <Text className={`${colors.heading} text-xs text-center`}>{place}</Text>
                    </View>

                </View>

                <View className="flex-row justify-center items-center rounded-xl mb-4">
                    <Image source={require('../assets/images/7.png')} className="w-80 h-80"></Image>
                </View>

                <View className="space-y-3" >
                    <View className="flex-row justify-between items-center">
                        <Text className={`${colors.heading} font-bold text-xl`}>Expense</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AddExpense', { id, place, country })} className="p-2 px-3 bg-white border-gray-200 rounded-full">
                            <Text>Add Expense</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        expenseLoading ? (
                            <Loading />
                        ) : (
                            <View style={{ height: 330 }}>
                                <FlatList
                                    ListEmptyComponent={<EmptyList message="You haven't recorded any expense yet" />}
                                    data={expense}
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
                        )
                    }
                </View>
            </View>

        </ScreenWrapper>

    )
}