import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';


import ListaProductos from './components/ListaProductos';

import icon from './assets/icon.png';

export default function App() {
    const alerta = () => alert("Hola Mundo!");

    return (
        <View style={styles.container}>
            {/* Componente que no es de react native, para cambiar el color de la barra de estado, iconos, batería, etc */}
            <StatusBar style="light" />

            {/* Cualquier bloque como un div */}
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Image source={icon} blurRadius={5} style={{
                    width: 100,
                    height: 100,
                    marginBottom: 20
                }} />
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 100, height: 100 }} />
            </View>

            {/* Textos */}
            <Text className="text-white text-center text-2xl">Hola Mundo!</Text>
            <Text style={styles.textStyles}>Primera aplicación de React Native con Expo!</Text>

            {/* Botones */}
            {/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: 20, rowGap: 20, flexWrap: "wrap" }}>
                <Button color="#09f" title="Button" onPress={alerta} />
                <TouchableHighlight underlayColor={"#08e"} onPress={alerta} style={{ backgroundColor: "#09f", padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: "#fff" }}>Touchable Hightlight</Text>
                </TouchableHighlight>
                <TouchableOpacity activeOpacity={.7} onPress={alerta} style={{ backgroundColor: "#09f", padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: "#fff" }}>Touchable Hightlight</Text>
                </TouchableOpacity>
                <Pressable onPress={alerta} style={({ pressed }) => [
                    { backgroundColor: pressed ? "#07d" : "#09f", padding: 10, borderRadius: 10 }
                ]}>
                    {({ pressed }) => (
                        <Text style={{ color: "#fff" }}>{pressed ? "Pressed" : "Press Me"}</Text>
                    )}
                </Pressable>
            </View> */}

            {/* LISTA DE PRODUCTOS */}
            <ListaProductos />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
});