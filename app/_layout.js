import { StatusBar } from "expo-status-bar";
import { Pressable, View } from "react-native";
import { Link, Slot, Stack } from "expo-router";
import { CircleInfoIcon } from "../components/Icons";

function Layout(){
    return(
        <View className="flex-1">
            {/* Componente que no es de react native, para cambiar el color de la barra de estado, iconos, batería, etc */}
            <StatusBar style="light" />

            {/* Renderiza el contenido, similar a children */}
            {/* <Slot /> */}

            {/* Cuando se usa el stack en lugar de slot, ya no debemos usar justify-center ni items-center en el contenedor */}
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "#09f" },
                    headerTintColor: "white",
                    headerLeft: () => {},
                    headerTitle: "HOMESTOCKESSENTIALS",
                    headerRight: () => (
                        <Link asChild href="/about" className="self-end mr-4">
                            <Pressable className="flex-row gap-2 items-center">
                                <CircleInfoIcon />
                            </Pressable>
                        </Link>
                    )
                }}
            >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </View>
    )
}

export default Layout;