import { View } from "react-native";

function Screen({ children }){
    return(
        <View className="flex-1 bg-black/80 pt-4 items-center">
            { children }
        </View>
    )
}

export default Screen;