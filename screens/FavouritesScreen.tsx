import { StyleSheet, Text, View } from "react-native"
import React, { useContext } from "react"
import MealsList from "../components/mealsList/MealsList"
import { FavoriteContext } from "../store/context/FavouritesContext"
import { MEALS } from "../data/data"

const FavouritesScreen = () => {
  const { ids } = useContext(FavoriteContext)
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }
  return <MealsList displayedMeals={favoriteMeals} />
}

export default FavouritesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
})
