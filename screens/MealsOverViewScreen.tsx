import { FlatList, StyleSheet, View } from "react-native"
import React from "react"
import { MEALS } from "../data/data"
import MealItem from "../components/MealItem"
import Meal from "../models/meal"

const MealsOverViewScreen = ({ route }: any) => {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  })

  const renderMealItem = (itemData: { item: Meal }) => {
    return <MealItem {...itemData.item} />
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})