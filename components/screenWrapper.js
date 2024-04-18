import { StatusBar } from "expo-status-bar"
import { Platform, Text, View } from "react-native";

export default function ScreenWrapper(children) {

    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 15;
    
    if (Platform.OS == "ios") {
        statusBarHeight = 30;
    }
    
    return (

        <View style={{paddingTop: statusBarHeight}}>
            {
                children.children
            }
        </View>
    )    
}