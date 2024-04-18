import { Image, View, Text, TouchableOpacity } from "react-native";

import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { colors } from "../theme";
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white rounded-full h-8 w-8">
                <ChevronLeftIcon size="30" color={colors.button}/>
            </TouchableOpacity>
        </View>
    )
}