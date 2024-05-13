import { StyleSheet, Text, View } from "react-native"
import React from "react"

const MealOverViewScreen = ({ route }: any) => {
  const catId = route.params.categoryId

  return (
    <View>
      <Text>category - {catId}</Text>
    </View>
  )
}

export default MealOverViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
