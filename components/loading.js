import { ActivityIndicator, View } from "react-native";
import { colors } from "../theme";


export default function Loading() {

    return (
        <View className="flex-row justify-center py-8">
            <ActivityIndicator size="large" color={colors.button}></ActivityIndicator>
        </View>
    )

}