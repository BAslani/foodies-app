import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import MealItem from "./MealItem"
import Meal from "../../models/meal"

type Props = {
  displayedMeals: Meal[]
}

const MealsList = ({ displayedMeals }: Props) => {
  const renderMealItem = (itemData: { item: Meal }) => {
    return <MealItem {...itemData.item} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
