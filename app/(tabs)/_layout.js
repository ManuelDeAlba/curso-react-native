import { Link, Stack, Tabs } from "expo-router";
import { CircleInfoIcon, HomeIcon } from "../../components/Icons";
import { Pressable } from "react-native";

function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: "#09f" },
                headerTintColor: "white",
                headerTitle: "HOMESTOCKESSENTIALS",
                headerRight: () => (
                    <Link asChild href="/about" className="self-end mr-4">
                        <Pressable className="flex-row gap-2 items-center">
                            <CircleInfoIcon />
                        </Pressable>
                    </Link>
                ),
                tabBarStyle: { backgroundColor: "#09f" },
                tabBarActiveTintColor: "white",
                tabBarActiveBackgroundColor: "#08e",
                tabBarInactiveTintColor: "rgba(255,255,255,.5)"
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    // Color que viene desde tabBarActiveTintColor
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Acerca de",
                    tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
                    headerLeft: () => (
                        <Link asChild href="/">
                            <Pressable className="flex-row gap-2 items-center active:opacity-50 ml-4 mr-4">
                                <HomeIcon />
                            </Pressable>
                        </Link>
                    ),
                    headerRight: () => {}
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;