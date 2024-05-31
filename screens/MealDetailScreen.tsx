import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useLayoutEffect } from "react"
import { MEALS } from "../data/data"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/Subtitle"
import List from "../components/List"
import IconButton from "../components/IconButton"

const MealDetailScreen = ({ route, navigation }: any) => {
  const headerRightBtnHandler = () => console.log("tapped")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerRightBtnHandler}
            color='white'
            icon='star'
          />
        )
      },
    })
  })
  const mealId = route.params?.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listsContainer}>
          <Subtitle title='Ingredients' />
          <List selectedMeal={selectedMeal?.ingredients} />
          <Subtitle title='Steps' />
          <List selectedMeal={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listsContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
})
