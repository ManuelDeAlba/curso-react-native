import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

function Producto({ producto }){
    return(
        <View key={producto.id} style={styles.listElement}>
            <Image source={{ uri: producto.img || "https://via.placeholder.com/100" }} style={styles.listImage} />
            <Text style={styles.listText}>{producto.nombre}</Text>
        </View>
    )
}

export function ProductoAnimado({ producto, indice }){
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: indice * 300,
            useNativeDriver: true
        }).start();
    }, [opacity, indice])

    return <Animated.View style={{ opacity }}>
        <Producto producto={producto} />
    </Animated.View>
}

const styles = StyleSheet.create({
    listElement: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 5
    },
    listImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    listText: {
        flex: 1,
        backgroundColor: "#09f",
        padding: 10,
        borderRadius: 10,
        color: "#fff"
    }
})

export default Producto;