import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Slot } from "expo-router";

function Layout(){
    return(
        <View className="flex-1 justify-center items-center bg-black/80">
            {/* Componente que no es de react native, para cambiar el color de la barra de estado, iconos, batería, etc */}
            <StatusBar style="light" />

            {/* Renderiza el contenido, similar a children */}
            <Slot />
        </View>
    )
}

export default Layout;