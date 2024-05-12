import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import { CATEGORIES } from "../data/data"
import CategoryGridTile from "../components/CategoryGridTile"

const CategoriesScreen = ({ navigation }: any) => {
  const handlePressed = () => {
    navigation.navigate("meal")
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <CategoryGridTile category={item} onPress={handlePressed} />
      )}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
