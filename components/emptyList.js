import { Image, View, Text } from "react-native";


export default function EmptyList({message}) {
    return (
        <View className="flex justify-center items-center my-5">
            <Image className="w-36 h-36 shallow" source={require('../assets/images/empty.png')} />
            <Text className="font-bold text-gray-400">{message||'data not found'}</Text>
        </View>

    )
}