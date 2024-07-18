import { Pressable, ScrollView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

import { styled } from "nativewind";

import { HomeIcon } from "../components/Icons";
import Screen from "../components/Screen";

const StyledPressable = styled(Pressable);

function About(){
    return(
        <Screen>
            {/* Stack config */}
            <Stack.Screen
                options={{
                    headerRight: () => {}
                }}
            />

            <ScrollView className="container px-8">
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

                <Text className="text-white mt-20 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam voluptas. Commodi suscipit voluptas quas omnis at architecto quidem? Eveniet nostrum nobis quidem enim velit dolorum omnis, obcaecati vel nesciunt.</Text>
                <Text className="text-white mt-4 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae mollitia repudiandae ratione architecto doloribus animi corporis quidem optio facere non excepturi quisquam, ipsum nisi blanditiis, amet quo dolorem accusantium, provident tenetur cupiditate. Libero fugiat qui tempora, hic dolores illo eveniet est nam nostrum quae soluta sapiente laudantium facilis ut ullam.</Text>
                <Text className="text-white mt-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam voluptas. Commodi suscipit voluptas quas omnis at architecto quidem? Eveniet nostrum nobis quidem enim velit dolorum omnis, obcaecati vel nesciunt.</Text>
                <Text className="text-white mt-4 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae mollitia repudiandae ratione architecto doloribus animi corporis quidem optio facere non excepturi quisquam, ipsum nisi blanditiis, amet quo dolorem accusantium, provident tenetur cupiditate. Libero fugiat qui tempora, hic dolores illo eveniet est nam nostrum quae soluta sapiente laudantium facilis ut ullam.</Text>
            </ScrollView>
        </Screen>
    )
}

export default About;