import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import ListaProductos from "../components/ListaProductos";
import { CircleInfoIcon } from "../components/Icons";

function Index(){
    return(
        <>
            {/* asChild permite pasarle componentes */}
            <Link asChild href="/about" className="self-end mr-4">
                {/* Link solamente puede renderizar un hijo,
                para ello envolvemos con Pressable ya que con View le quita la interactividad */}
                <Pressable className="flex-row gap-2 items-center">
                    <CircleInfoIcon />
                </Pressable>
            </Link>

            {/* LISTA DE PRODUCTOS */}
            <ListaProductos />
        </>
    )
}

export default Index;