import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";

import { ArrowBackCircle } from "../components/Icons";

const StyledPressable = styled(Pressable);

function Detalle(){
    const [producto, setProducto] = useState(null);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        fetch("https://homestockessentials.vercel.app/api/productos")
            .then(res => res.json())
            .then(productos => {
                const prod = productos.find(p => p.id === id);
                setProducto(prod);
            });
    }, [id])

    return(
        <View className="flex-1 justify-center items-center">
            <View className="container px-8 flex-row justify-between items-center gap-4 mb-8">
                <Link asChild href="/" className="text-[#09f]">
                    <StyledPressable className="active:opacity-80">
                        <ArrowBackCircle size={30} />
                    </StyledPressable>
                </Link>
                <Text className="text-white font-bold text-2xl">Detalle del producto</Text>
            </View>
            <View>
                {
                    producto ? (
                        <>
                            <Image source={{ uri: producto.img || "https://via.placeholder.com/100" }} className="w-[80%] aspect-square rounded-lg m-auto" />
                            <Text className="text-white font-bold text-2xl text-center mt-8 mb-4">{producto.nombre}</Text>
                            <Text className="text-white">Cantidad: {producto.cantidad || "Sobre pedido"}</Text>
                            <View className="flex-row items-baseline gap-4">
                                <Text className="text-white text-2xl">${producto.precio_venta}</Text>
                                {
                                    producto.precio_venta < producto.ultimo_precio_venta && (
                                        <Text className="line-through text-base text-red-300">${producto.ultimo_precio_venta}</Text>
                                    )
                                }
                            </View>
                        </>
                    ) : (
                        <Text className="text-white text-lg">Cargando...</Text>
                    )
                }
            </View>
        </View>
    )
}

export default Detalle;