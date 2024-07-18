import { View, Button, Pressable, Text, TouchableHighlight, TouchableOpacity } from "react-native";

function Botones(){
    const alerta = () => alert("Hola Mundo!");
    
    return(
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: 20, rowGap: 20, flexWrap: "wrap" }}>
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
        </View>
    )
}

export default Botones;