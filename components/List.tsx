import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Meal from "../models/meal"

type Props = {
  selectedMeal?: string[]
}

const List = ({ selectedMeal }: Props) => {
  return selectedMeal?.map((ingredient) => (
    <View style={styles.listItem} key={ingredient}>
      <Text style={styles.itemText}>{ingredient}</Text>
    </View>
  ))
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
})
