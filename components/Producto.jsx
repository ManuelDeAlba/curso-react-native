import { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";

function Producto({ producto }){
    return(
        <View key={producto.id} className="flex-row gap-3 my-1">
            <Image source={{ uri: producto.img || "https://via.placeholder.com/100" }} className="w-24 h-24 rounded-lg" />
            <View className="flex-1 bg-[#09f] p-3 rounded-lg">
                <Text className="text-white font-bold">{producto.nombre}</Text>
                <Text className="text-white">Cantidad: {producto.cantidad || "Sobre pedido"}</Text>
                <Text className="text-white text-lg">${producto.precio_venta}</Text>
            </View>
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

export default Producto;