import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors, items, categoryBG } from "../theme/index"
import BackButton from "../components/backButton";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function AddExpenseScreen() {

    const [title, setTitle] = useState('')

    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const navigation = useNavigation();

    const handleExpense = () => {
        if (title && amount && category) {
            navigation.navigate('Home')
        } else {

        }
    }
    return (
        <ScreenWrapper>
            <KeyboardAwareScrollView>
                <View className="flex h-full mx-4">
                    <View className="flex flex-row mt-5">
                        <View className="flex-auto">
                            <BackButton />
                        </View>
                        <View className="flex-auto">
                            <Text className={`${colors.heading} text-xl font-bold`}>Add Expense</Text>
                        </View>
                    </View>


                    <View className="flex-row justify-center my-3 mt-5">
                        <Image className="h-72 w-72" source={require('../assets/images/expenseBanner.png')}></Image>
                    </View>

                    <View className="space-y-2 mx-2">
                        <Text className={`${colors.heading} text-lg font-bold`}>For What?</Text>
                        <TextInput value={title} onChangeText={value => { setTitle(value) }} className='p-4 bg-white rounded-full mb-3' />
                        <Text className={`${colors.heading} text-lg font-bold`}>How Much?</Text>
                        <TextInput value={amount} onChangeText={value => { setAmount(value) }} className='p-4 bg-white rounded-full mb-3' />
                    </View>
                    <View className="mx-2 space-x-2">
                        <Text className="text-lg font-bold">Category</Text>
                        <View className="flex-row flex-wrap items-center"
                        >{
                        
                            Object.keys(categoryBG).map(key => {
                               let bgColor = 'bg-white';
                               key = key.charAt(0).toUpperCase() + key.substring(1);

                               if (key == category) bgColor = "bg-green-200";
                               console.log(key);

                               return <TouchableOpacity onPress={()=>{setCategory(key)}} className={`${bgColor} rounded-full px-4 p-3 mb-2 mr-2`}>
                                <Text>{key}</Text>
                               </TouchableOpacity>
                               
                            })
                        
                        
                        }

                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={handleExpense} style={{ backgroundColor: colors.button }} className="my-6 rounded-full p-3 shadow-sm mx-2">
                            <Text className="text-center text-white text-lg font-bold">Add Expense</Text>

                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </ScreenWrapper>
    )
}