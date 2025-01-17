import { Pressable } from "react-native";
import { Link } from "expo-router";

import ListaProductos from "../../components/ListaProductos";
import Screen from "../../components/Screen";
import { CircleInfoIcon } from "../../components/Icons";

function Index(){
    return(
        <Screen>
            {/* asChild permite pasarle componentes */}
            {/* Link solamente puede renderizar un hijo,
                para ello envolvemos con Pressable ya que con View le quita la interactividad */}
            {/* <Link asChild href="/about" className="self-end mr-4">
                <Pressable className="flex-row gap-2 items-center">
                    <CircleInfoIcon />
                </Pressable>
            </Link> */}

            {/* LISTA DE PRODUCTOS */}
            <ListaProductos />
        </Screen>
    )
}

export default Index;