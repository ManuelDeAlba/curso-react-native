import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Botones from './components/Botones';
import ListaProductos from './components/ListaProductos';

import icon from './assets/icon.png';

export default function App() {
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
            {/* <Botones /> */}

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