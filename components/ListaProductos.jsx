import { ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from 'react';
import { filtrarElementos } from '../lib/utils';
import Producto, { ProductoAnimado } from "./Producto";

function ListaProductos(){
    const [filtro, setFiltro] = useState("");
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        fetch("https://homestockessentials.vercel.app/api/productos")
            .then(res => res.json())
            .then(setProductos);
    }, [])

    useEffect(() => {
        if (!productos.length) return;

        if (filtro != "") {
            const filtrados = productos.filter(producto => filtrarElementos(filtro, producto, "nombre"));
            setProductosFiltrados(filtrados);
        } else {
            setProductosFiltrados(productos);
        }
    }, [filtro, productos])

    const handleFiltro = (texto) => {
        setFiltro(texto);
    }

    return(
        <>
            <Text style={{ ...styles.texto, marginTop: 20 }}>HOMESTOCKESSENTIALS</Text>
            <Text style={{ ...styles.texto, marginBottom: 10 }}>Productos filtrados: {productosFiltrados.length}</Text>
            <TextInput style={styles.input} value={filtro} onChangeText={handleFiltro} placeholder="Filtrar productos..." />
            {
                productosFiltrados.length === 0 ? (
                    <ActivityIndicator size="large" />
                ) : (
                    // <ScrollView style={{ width: "90%", maxHeight: 300 }}>
                    //     <View style={{ gap: 10 }}>
                    //         {productosFiltrados.map(producto => (
                    //             <View key={producto.id} style={styles.listElement}>
                    //                 <Image source={{ uri: producto.img || "https://via.placeholder.com/100" }} style={styles.listImage} />
                    //                 <Text style={styles.listText}>{producto.nombre}</Text>
                    //             </View>
                    //         ))}
                    //     </View>
                    // </ScrollView>
                    <FlatList
                        style={{ width: "90%", maxHeight: 400 }}
                        data={productosFiltrados}
                        keyExtractor={producto => producto.id} renderItem={
                            ({ item, index }) => (
                                <ProductoAnimado producto={item} indice={index} />
                            )
                        }
                    />
                )
            }
            
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
    input: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
});

export default ListaProductos;