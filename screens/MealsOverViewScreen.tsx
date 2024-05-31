import { StyleSheet } from "react-native"
import React, { useLayoutEffect } from "react"
import { MEALS, CATEGORIES } from "../data/data"

import MealsList from "../components/mealsList/MealsList"

const MealsOverViewScreen = ({ route, navigation }: any) => {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((c) => c.id === catId)?.title

    navigation.setOptions({
      title: catTitle,
    })
  }, [catId, navigation])

  return <MealsList displayedMeals={displayedMeals} />
}

export default MealsOverViewScreen
