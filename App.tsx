import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FavouritesScreen from "./screens/FavouritesScreen"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
      }}
    >
      <Drawer.Screen
        options={{ title: "All categories" }}
        name='categories'
        component={CategoriesScreen}
      />
      <Drawer.Screen name='favourites' component={FavouritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name='categoriesDrawer'
            component={DrawerNavigator}
          />
          <Stack.Screen name='mealsOverView' component={MealsOverViewScreen} />
          <Stack.Screen name='meal' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
