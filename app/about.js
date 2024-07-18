import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

import { styled } from "nativewind";

import { HomeIcon } from "../components/Icons";

const StyledPressable = styled(Pressable);

function About(){
    return(
        <ScrollView className="pt-24 container px-8">
            <Link asChild href="/" className="self-start ml-4 mb-8">
                {/* <Pressable>
                    {({ pressed }) => (
                        <View className="flex-row gap-2 items-center">
                            <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                            <Text className="text-white" style={{ opacity: pressed ? 0.5 : 1 }}>Inicio</Text>
                        </View>
                    )}
                </Pressable> */}
                <StyledPressable className="flex-row gap-2 items-center active:opacity-50">
                    <HomeIcon />
                    <Text className="text-white">Inicio</Text>
                </StyledPressable>
            </Link>

            <Text className="text-white text-center text-2xl">¡Hola Mundo!</Text>
            <Text className="text-white text-center text-lg">Primera aplicación de React Native con Expo</Text>
            <Text className="text-white text-center text-lg">Siguiendo el curso de midudev</Text>
        </ScrollView>
    )
}

export default About;