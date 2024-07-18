Como se está usando una plantilla en blanco con

    npx create-expo-app@latest curso-react-native-midudev --template blank

No viene habilitada la opción de abrir desde la web al ejecutar `npm start` o `npm run web`

Para eso tendremos que instalar lo siguiente para que inmediatamente se active esa opción

    npx expo install react-dom react-native-web @expo/metro-runtime

# Componentes

### View
Cualquier bloque como un div (display flex por defecto)

### Text
Renderizar texto, son obligatorios

### Image
Mostrar imagenes
- source (imagen importada para imagenes locales o un objeto con uri)
- blurRadius
- styles

### Button
Componente boton nativo de cada sistema operativo, no se pueden aplicar estilos con la propiedad style y tampoco acepta children
- title
- onPress
- color

### TouchableHighlight
Permite hacer botones más personalizables con estilos e hijos
- underlayColor (color al hacer hover)

### TouchableOpacity
También permite hacer botones más personalizables
- activeOpacity (baja la opacidad del botón al hacer hover)

### Pressable (mejor forma actualmente)
Boton que permite tener más personalización, diferentes estados, etc.

### ScrollView
Contenedor con scroll para cuando no caben elementos en la pantalla del celular
Buena idea para cajas de texto grandes estáticas (no elementos dinámicos)
Renderiza todos los elementos a la vez

### FlatList
Lista más optimizada
- data
- keyExtractor
- renderItem

### ActivityIndicator
Renderiza un icono de carga con animación

### SafeAreaView (iOS)
No utiliza el espacio de la barra de notificaciones o de los controles de navegación

### StatusBar
Componente que no es de react native, es de expo, para cambiar el color de la barra de estado, iconos, batería, etc.


# Expo constants

    npx expo install expo-constants

Y por ejemplo, en los componentes podemos aplicar estilos como

`Constants.statusBarHeight`

O también se pueden obtener otro tipo de constantes

# React Native Safe Area Context

    npx expo install react-native-safe-area-context

Toda la aplicación se debe envolver con un provider para que funcione correctamente

```js
import { SafeAreaProvider } from "react-native-safe-area-context";

<SafeAreaProvider>
...
</SafeAreaProvider>
```

Y en los componentes se pueden usar los límites seguros de renderizado

```js
import { useSafeAreaInsets } from "react-native-safe-area-context";

const insets = useSafeAreaInsets();

<View styles={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
...
</View>
```

# React Native SVG

    npx expo install react-native-svg

Usando https://react-svgr.com/playground se pueden convertir los SVG a componentes de React Native


# NativeWind

`npm install nativewind@2`

`npm install --save-dev --save-exact tailwindcss@3.3.2`

`npx tailwindcss init`

```js
module.exports = {
  content: [
    './App/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './**/*.{js,jsx,ts,tsx}',
    './*.{js,jsx,ts,tsx}',
  ],
  ...
}
```

babel.config.js

    plugins: ["nativewind/babel"]


# Router

    npx expo install expo-router react-native-safe-area-context expo-linking react-native-screens expo-constants expo-status-bar

"main": "expo/AppEntry.js", -> "main": "expo-router/entry.js"

Crear carpeta app
Crear archivo _layout.js
Crear archivo index.js
Crear archivo about.js
Crear archivo [id].js
Crear (tabs) -> es una ruta que no toma en cuenta, solo agrupa los archivos

Para ponerlo en el _layout

```js
import { Slot, Stack } from 'expo-router';

<Stack
    screenOptions={{
        ...
    }}
/>

<Stack.Screen
    options={{
        headerStyle: { backgroundColor: "#09f" },
        headerTintColor: "black",
        headerLeft: () => {},
        headerTitle: "Titulo",
        headerRight: () => {}
    }}
/>
```

Para usar en la app

```js
import { Link } from 'expo-router';
```

Para obtener los parámetros

```js
import { useLocalSearchParams } from 'expo-router';

const { id } = useLocalSearchParams();
```

Mostrar las dos rutas de la carpeta tabs

```js
import { Tabs } from 'expo-router';

export default function TabsLayout(){
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { background: "#000" },
            tabBarActiveTintColor: "red"
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color }) => <Icon color={color} />
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                title: "About",
                tabBarIcon: ({ color }) => <Icon color={color} />
            }}
        />
    </Tabs>
}
```

# Iconos

    npm install @expo/vector-icons

https://icons.expo.fyi/Index


# Esquema para las rutas

"scheme": "myapp",