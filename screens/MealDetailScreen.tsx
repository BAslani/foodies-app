import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useContext, useLayoutEffect } from "react"
import { MEALS } from "../data/data"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/Subtitle"
import List from "../components/List"
import { FavoriteContext } from "../store/context/FavouritesContext"
import Ionicans from "@expo/vector-icons/Ionicons"

const MealDetailScreen = ({ route, navigation }: any) => {
  const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext)

  const mealId = route.params?.mealId

  const isFavorite = ids.includes(mealId)
  const headerRightBtnHandler = () => {
    if (isFavorite) {
      removeFavorite(mealId)
    } else {
      addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={headerRightBtnHandler}>
            <Ionicans
              name={isFavorite ? "star" : "star-outline"}
              size={24}
              color='white'
            />
          </Pressable>
        )
      },
    })
  }, [navigation, headerRightBtnHandler])

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
